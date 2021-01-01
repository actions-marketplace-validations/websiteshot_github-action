import { Runner } from './controller/runner.controller'
import { Validation } from './controller/validation.controller'
const core = require('@actions/core')

async function run() {
  try {
    Validation.checkEnvVars()
    await Runner.run()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
