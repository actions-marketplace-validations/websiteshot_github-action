import { EnvVar } from '../enums/EnvVar.enum'

export class Validation {
  public static checkEnvVars() {
    for (const envvar in EnvVar) {
      if (!process.env[envvar]) {
        throw new Error(`Environment Variable "${envvar}" is mandatory.`)
      }
    }
  }
}
