"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validation = void 0;
const EnvVar_enum_1 = require("../enums/EnvVar.enum");
class Validation {
    static checkEnvVars() {
        for (const envvar in EnvVar_enum_1.EnvVar) {
            if (!process.env[envvar]) {
                throw new Error(`Environment Variable "${envvar}" is mandatory.`);
            }
        }
    }
}
exports.Validation = Validation;
//# sourceMappingURL=validation.controller.js.map