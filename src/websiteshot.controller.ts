import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = `https://api.websiteshot.app`;

export interface Url {
  url: string;
  name: string;
  loadingTime?: number;
}

export interface ScreenshotParameter {
  width: number;
  height: number;
}

export interface CreateRequest {
  projectId: string;
  apikey: string;
  screenshotParameter: ScreenshotParameter;
  urls: Url[];
}

export class WebsiteshotController {
  constructor(private request: CreateRequest) {}

  public async scheduleJob() {
    const url = `${BASE_URL}/api/projects/${this.request.projectId}`;
    const data = {
      screenshotParameter: this.request.screenshotParameter,
      urls: this.request.urls,
    };

    const config: AxiosRequestConfig = {
      method: `POST`,
      url,
      headers: {
        Authorization: this.request.apikey,
      },
      data,
    };

    try {
      await axios(config);
    } catch (error) {
      throw new Error(`Failed to create Screenshot Job: ${error.message}`);
    }
  }
}
