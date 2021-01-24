import {
  Config,
  CreateRequest,
  CreateResponse,
  ScreenshotParameter,
  Url,
  WebsiteshotController,
} from '@websiteshot/nodejs-client'
import { EnvVar, EnvVarOptional } from '../enums/EnvVar.enum'

export class Runner {
  public static async run(): Promise<string> {
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

    const templateId = process.env[EnvVarOptional.TEMPLATE_ID]
      ? process.env[EnvVarOptional.TEMPLATE_ID]
      : undefined
    const urls: Url[] = process.env[EnvVarOptional.URLS]
      ? JSON.parse(String(process.env[EnvVarOptional.URLS]))
      : undefined

    const scheduledTs = process.env[EnvVarOptional.SCHEDULE_TS]
      ? Number(process.env[EnvVarOptional.SCHEDULE_TS])
      : undefined
    const scheduleUnit: 'm' | 'h' | 'd' = process.env[
      EnvVarOptional.SCHEDULE_UNIT
    ]
      ? (String(process.env[EnvVarOptional.SCHEDULE_UNIT]) as 'm' | 'h' | 'd')
      : undefined
    const scheduleValue = process.env[EnvVarOptional.SCHEDULE_VALUE]
      ? Number(process.env[EnvVarOptional.SCHEDULE_VALUE])
      : undefined

    const createRequest: CreateRequest = {
      templateId,
      screenshotParameter,
      urls,
      scheduledTs,
      scheduleDescription:
        scheduleUnit && scheduleValue
          ? { value: scheduleValue, unit: scheduleUnit }
          : undefined,
    }

    const response: CreateResponse = await websiteshotController.create(
      createRequest,
    )
    return response.jobId
  }
}
