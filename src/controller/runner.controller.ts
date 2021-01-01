import {
  Config,
  CreateRequest,
  ScreenshotParameter,
  Url,
  WebsiteshotController,
} from '@websiteshot/nodejs-client'

export class Runner {
  public static async run() {
    const config: Config = {
      projectId: String(process.env.PROJECT_ID),
      apikey: String(process.env.API_KEY),
    }

    const websiteshotController: WebsiteshotController = new WebsiteshotController(
      config,
    )

    const screenshotParameter: ScreenshotParameter = {
      width: 1200,
      height: 720,
    }

    const urls: Url[] = [
      {
        url: String(process.env.URL),
        name: String(process.env.URL),
      },
    ]

    const createRequest: CreateRequest = {
      screenshotParameter,
      urls,
    }

    await websiteshotController.create(createRequest)
  }
}
