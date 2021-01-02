import {
  Config,
  CreateRequest,
  ScreenshotParameter,
  Url,
  WebsiteshotController,
} from '@websiteshot/nodejs-client'
import { EnvVar, EnvVarOptional } from '../enums/EnvVar.enum'

export class Runner {
  public static async run() {
    const config: Config = {
      projectId: String(process.env[EnvVar.PROJECT_ID]),
      apikey: String(process.env[EnvVar.API_KEY]),
    }

    const websiteshotController: WebsiteshotController = new WebsiteshotController(
      config,
    )

    const screenshotParameter: ScreenshotParameter = {
      width: 1200,
      height: 720,
    }

    const urls: Url[] = JSON.parse(String(process.env[EnvVar.URLS]))

    const scheduledTs = process.env[EnvVarOptional.SCHEDULE_TS]
      ? Number(process.env[EnvVarOptional.SCHEDULE_TS])
      : undefined
    const scheduleUnit = process.env[EnvVarOptional.SCHEDULE_UNIT]
      ? String(process.env[EnvVarOptional.SCHEDULE_UNIT])
      : undefined
    const scheduleValue = process.env[EnvVarOptional.SCHEDULE_VALUE]
      ? String(process.env[EnvVarOptional.SCHEDULE_VALUE])
      : undefined

    const createRequest: CreateRequest = {
      screenshotParameter,
      urls,
      scheduledTs,
      scheduleDescription:
        scheduleUnit && scheduleValue
          ? { value: scheduleValue, unit: scheduleUnit }
          : undefined,
    }

    await websiteshotController.create(createRequest)
  }
}
