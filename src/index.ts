import { Runner } from './controller/runner.controller'
import { Validation } from './controller/validation.controller'
const core = require('@actions/core')

async function run() {
  try {
    Validation.checkEnvVars()
    const jobId: string = await Runner.run()
    core.info(`Created Job with Id: ${jobId}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
