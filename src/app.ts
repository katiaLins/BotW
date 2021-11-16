// Supports ES6
import { create, Whatsapp } from 'venom-bot';

const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['pt'], forceNER: true });

//treino de saudação
manager.addDocument('pt', 'bom dia', 'SAUDACAO');
manager.addDocument('pt', 'boa tarde', 'SAUDACAO');
manager.addDocument('pt', 'boa noite', 'SAUDACAO');
manager.addDocument('pt', 'ola, e ai, ', 'SAUDACAO');
manager.addDocument('pt', 'oi', 'SAUDACAO');
manager.addDocument('pt', 'tudo bem, tudo bom', 'SAUDACAO');

//treino de Localização
manager.addDocument('pt', '3', 'LOCALIZACAO');
manager.addDocument('pt', 'local', 'LOCALIZACAO');
manager.addDocument('pt', 'O endereço', 'LOCALIZACAO');
manager.addDocument('pt', 'Localização', 'enderço', 'LOCALIZACAO');
manager.addDocument('pt', 'onde fica o local', 'LOCALIZACAO');
manager.addDocument('pt', 'onde fica', 'LOCALIZACAO');
manager.addDocument('pt', 'O ponto de referencia', 'LOCALIZACAO');
manager.addDocument('pt', 'O endereço da empresa', 'LOCALIZACAO');
manager.addDocument('pt', 'Gostaria de solicitar o endereço da empresa', 'LOCALIZACAO');

//treino de Horario 
manager.addDocument('pt', '2', 'HORARIO');
manager.addDocument('pt', 'Gostaria de solicitar o horario de atendimento', 'HORARIO');
manager.addDocument('pt', 'O horario de atendimento', 'HORARIO');
manager.addDocument('pt', 'O horario que vocẽs atemdem', 'HORARIO');

//treino de Consulta 
manager.addDocument('pt', '1', 'CONSULTA');
manager.addDocument('pt', 'Gostaria de marcar uma consulta', 'CONSULTA');
manager.addDocument('pt', 'marcar consulta?', 'CONSULTA');
manager.addDocument('pt', 'Consulta marcação', 'CONSULTA');

//treino de Aleatorio
manager.addDocument('pt', 'sexo', 'ALEATORIO');
manager.addDocument('pt', 'tchau', 'ALEATORIO');
manager.addDocument('pt', 'coisa', 'ALEATORIO');

//treino de Finalização 
manager.addDocument('pt', 'Obrigada', 'FINALIZACAO');
manager.addDocument('pt', 'Obrigado', 'FINALIZACAO');
manager.addDocument('pt', 'Grato, grata', 'FINALIZACAO');
manager.addDocument('pt', 'CPF:, Nome completo:,  convênio médico:, Consulta Particular?, Já é Paciente:(Sim) ou (Não)', 'FINALIZACAO');


// Respostas
manager.addAnswer('pt', 'SAUDACAO', 'Olá, sou seu assistente virtual, como posso te ajudar?');
manager.addAnswer('pt', 'SAUDACAO', 'Olá, como posso ajudar?');
manager.addAnswer('pt', 'SAUDACAO', 'Oi, Tudo bem? Como posso ajudar?');
manager.addAnswer('pt', 'LOCALIZACAO', 'R. Ver. Hermínio Cardoso, 3003-3041 - Rio Novo,\n Maceió - AL, 57070-540');
manager.addAnswer('pt', 'LOCALIZACAO', 'Segue a localização:\n encurtador.com.br/dLQ23');
manager.addAnswer('pt', 'HORARIO', 'Segunda à Sexta, de 8h as 18h');
manager.addAnswer('pt', 'CONSULTA', 'Para marcação de consulta, por favor preencha as informações:\n CPF: \n Nome completo: \n convênio médico:\n Consulta Particular:Sim ou Não\n Já é Paciente:Sim ou Não');
manager.addAnswer('pt', 'FINALIZACAO', 'OK! Em breve entraremos em contato para infromar data e horário da sua consulta.\nAgradecemos seu contato.');


// Train and save the model.
(async() => {
    await manager.train();
    manager.save();

    const response = await manager.process('pt', 'Oi');
    console.log(response);
})();


  create('BotSorriso')
  .then((client) => {
    //Evento
    client.onMessage(async(message) => {
      if (message.isGroupMsg === false) {
        const response = await manager.process("pt", message.body.toLowerCase());
        
        if(response.intent === "None") {
          client.sendText(message.from, 
          'Desculpe, não entendi!\nPor gentileza, informe uma das opções.\n1 - Consulta;\n2 - Horário;\n3 - Localização.');
        } 
        
        else { 
          client.sendText(message.from,response.answer)
        }

        console.log("Intenção",response.intent);
        console.log("Presição:",response.score);
        
      }
    });

  })
  .catch((erro) => {
    console.log(erro);
  });

