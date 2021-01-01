"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteshotController = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = `https://api.websiteshot.app`;
class WebsiteshotController {
    constructor(request) {
        this.request = request;
    }
    async scheduleJob() {
        const url = `${BASE_URL}/api/projects/${this.request.projectId}`;
        const data = {
            screenshotParameter: this.request.screenshotParameter,
            urls: this.request.urls,
        };
        const config = {
            method: `POST`,
            url,
            headers: {
                Authorization: this.request.apikey,
            },
            data,
        };
        try {
            await axios_1.default(config);
        }
        catch (error) {
            throw new Error(`Failed to create Screenshot Job: ${error.message}`);
        }
    }
}
exports.WebsiteshotController = WebsiteshotController;
//# sourceMappingURL=websiteshot.controller.js.map