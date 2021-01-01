import core from '@actions/core'
import { Runner } from './controller/runner.controller'
import { Validation } from './controller/validation.controller'

async function run() {
  try {
    Validation.checkEnvVars()
    await Runner.run()
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
