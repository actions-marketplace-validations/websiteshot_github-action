"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runner = void 0;
const nodejs_client_1 = require("@websiteshot/nodejs-client");
class Runner {
    static async run() {
        const config = {
            projectId: String(process.env.PROJECT_ID),
            apikey: String(process.env.API_KEY),
        };
        const websiteshotController = new nodejs_client_1.WebsiteshotController(config);
        const screenshotParameter = {
            width: 1200,
            height: 720,
        };
        const urls = [
            {
                url: String(process.env.URL),
                name: String(process.env.URL),
            },
        ];
        const createRequest = {
            screenshotParameter,
            urls,
        };
        await websiteshotController.create(createRequest);
    }
}
exports.Runner = Runner;
//# sourceMappingURL=runner.controller.js.map