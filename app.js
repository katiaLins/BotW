"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var venom_bot_1 = require("venom-bot");
var NlpManager = require('node-nlp').NlpManager;
var manager = new NlpManager({ languages: ['pt'], forceNER: true });
manager.addDocument('pt', 'bom dia', 'SAUDACAO');
manager.addDocument('pt', 'boa tarde', 'SAUDACAO');
manager.addDocument('pt', 'boa noite', 'SAUDACAO');
manager.addDocument('pt', 'ola, e ai, ', 'SAUDACAO');
manager.addDocument('pt', 'oi', 'SAUDACAO');
manager.addDocument('pt', 'tudo bem, tudo bom', 'SAUDACAO');
manager.addDocument('pt', '3', 'LOCALIZACAO');
manager.addDocument('pt', 'local', 'LOCALIZACAO');
manager.addDocument('pt', 'O endereço', 'LOCALIZACAO');
manager.addDocument('pt', 'Localização', 'enderço', 'LOCALIZACAO');
manager.addDocument('pt', 'onde fica o local', 'LOCALIZACAO');
manager.addDocument('pt', 'onde fica', 'LOCALIZACAO');
manager.addDocument('pt', 'O ponto de referencia', 'LOCALIZACAO');
manager.addDocument('pt', 'O endereço da empresa', 'LOCALIZACAO');
manager.addDocument('pt', 'Gostaria de solicitar o endereço da empresa', 'LOCALIZACAO');
manager.addDocument('pt', '2', 'HORARIO');
manager.addDocument('pt', 'Gostaria de solicitar o horario de atendimento', 'HORARIO');
manager.addDocument('pt', 'O horario de atendimento', 'HORARIO');
manager.addDocument('pt', 'O horario que vocẽs atemdem', 'HORARIO');
manager.addDocument('pt', '1', 'CONSULTA');
manager.addDocument('pt', 'Gostaria de marcar uma consulta', 'CONSULTA');
manager.addDocument('pt', 'marcar consulta?', 'CONSULTA');
manager.addDocument('pt', 'Consulta marcação', 'CONSULTA');
manager.addDocument('pt', 'sexo', 'ALEATORIO');
manager.addDocument('pt', 'tchau', 'ALEATORIO');
manager.addDocument('pt', 'coisa', 'ALEATORIO');
manager.addDocument('pt', 'Obrigada', 'FINALIZACAO');
manager.addDocument('pt', 'Obrigado', 'FINALIZACAO');
manager.addDocument('pt', 'Grato, grata', 'FINALIZACAO');
manager.addDocument('pt', 'CPF:, Nome completo:,  convênio médico:, Consulta Particular?, Já é Paciente:(Sim) ou (Não)', 'FINALIZACAO');
manager.addAnswer('pt', 'SAUDACAO', 'Olá, sou seu assistente virtual, como posso te ajudar?');
manager.addAnswer('pt', 'SAUDACAO', 'Olá, como posso ajudar?');
manager.addAnswer('pt', 'SAUDACAO', 'Oi, Tudo bem? Como posso ajudar?');
manager.addAnswer('pt', 'LOCALIZACAO', 'R. Ver. Hermínio Cardoso, 3003-3041 - Rio Novo,\n Maceió - AL, 57070-540');
manager.addAnswer('pt', 'LOCALIZACAO', 'Segue a localização:\n encurtador.com.br/dLQ23');
manager.addAnswer('pt', 'HORARIO', 'Segunda à Sexta, de 8h as 18h');
manager.addAnswer('pt', 'CONSULTA', 'Para marcação de consulta, por favor preencha as informações:\n CPF: \n Nome completo: \n convênio médico:\n Consulta Particular:Sim ou Não\n Já é Paciente:Sim ou Não');
manager.addAnswer('pt', 'FINALIZACAO', 'OK! Em breve entraremos em contato para infromar data e horário da sua consulta.\nAgradecemos seu contato.');
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, manager.train()];
            case 1:
                _a.sent();
                manager.save();
                return [4, manager.process('pt', 'Oi')];
            case 2:
                response = _a.sent();
                console.log(response);
                return [2];
        }
    });
}); })();
(0, venom_bot_1.create)('BotSorriso')
    .then(function (client) {
    client.onMessage(function (message) { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(message.isGroupMsg === false)) return [3, 2];
                    return [4, manager.process("pt", message.body.toLowerCase())];
                case 1:
                    response = _a.sent();
                    if (response.intent === "None") {
                        client.sendText(message.from, 'Desculpe, não entendi!\nPor gentileza, informe uma das opções.\n1 - Consulta;\n2 - Horário;\n3 - Localização.');
                    }
                    else {
                        client.sendText(message.from, response.answer);
                    }
                    console.log("Intenção", response.intent);
                    console.log("Presição:", response.score);
                    _a.label = 2;
                case 2: return [2];
            }
        });
    }); });
})
    .catch(function (erro) {
    console.log(erro);
});
