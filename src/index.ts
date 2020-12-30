import core from '@actions/core';
import { CreateRequest, WebsiteshotController } from './websiteshot.controller';

async function run() {
  const projectId = process.env.PROJECT_ID;
  const apikey = process.env.API_KEY;
  const url = process.env.URL;

  const request: CreateRequest = {
    projectId,
    apikey,
    screenshotParameter: {
      width: 1200,
      height: 720,
    },
    urls: [
      {
        url,
        name: url,
      },
    ],
  };

  const websiteshotController = new WebsiteshotController(request);

  try {
    await websiteshotController.scheduleJob();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
