# Websiteshot Github Action

<hr />

<div align="center">
    <a href="https://websiteshot.app/">
        <img src="./assets/logo-mini.png">
    </a>
</div>

<div align="center">
<p>Never spend time again to create awesome screenshots of your websites.</p>
</div>

<div align="center">
<a style="margin: 1em;" href="https://websiteshot.app">Website</a> | <a style="margin: 1em;" href="https://console.websiteshot.app">Console</a> | <a style="margin: 1em;" href="https://github.com/websiteshot/community/discussions">Community</a> | <a style="margin: 1em;" href="https://docs.websiteshot.app">Documentation</a>
</div>

<hr />

This Github action creates a new screenshot job via Websiteshot. Prerequisite for the use is an account at Websiteshot.

## Usage

Name of Action: `websiteshot/github-action`

Mandatory Environment Variables:

- `PROJECT_ID`: The associated Websiteshot project in which the screenshots are created.
- `API_KEY`: Your Websiteshot API Key
- `URLS`: URLs für Screenshot creation in `JSON` Format (Array of [url-config](https://docs.websiteshot.app/docs/api/types/url-config))

Optional Parameters:

- `SCHEDULE_TS`: Timestamp when to trigger the Screenshot Job
- `SCHEDULE_UNIT` and `SCHEDULE_VALUE`: Instead of a timestamp you can specify a relative description from now on, like `15m` that will be translated into a timestamp in 15 minutes.

## Example

An example configuration looks like this:

```yaml
name: Publish

on: [push]

jobs:
  create-screenshot:
    runs-on: ubuntu-latest
    name: 'Schedule Screenshot Creation'
    steps:
      - uses: websiteshot/github-action@main
        env:
          PROJECT_ID: ${{ secrets.PROJECT_ID }}
          API_KEY: ${{ secrets.API_KEY }}
          URLS: '[{"url": "https://websiteshot.app", "name": "Websiteshot"}]'
          SCHEDULE_UNIT: 'm'
          SCHEDULE_VALUE: '5'
```
