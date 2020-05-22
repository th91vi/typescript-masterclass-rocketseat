"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailServce = /** @class */ (function () {
    function EmailServce() {
    }
    EmailServce.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("Email enviado para " + to.name + ": " + message.subject);
    };
    return EmailServce;
}());
exports.default = EmailServce;
