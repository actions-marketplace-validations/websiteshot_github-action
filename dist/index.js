"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __importDefault(require("@actions/core"));
const runner_controller_1 = require("./controller/runner.controller");
const validation_controller_1 = require("./controller/validation.controller");
async function run() {
    try {
        validation_controller_1.Validation.checkEnvVars();
        await runner_controller_1.Runner.run();
    }
    catch (error) {
        core_1.default.setFailed(error.message);
    }
}
run();
//# sourceMappingURL=index.js.map