FROM node:slim

# A bunch of `LABEL` fields for GitHub to index
LABEL "com.github.actions.name"="Websiteshot"
LABEL "com.github.actions.description"="Github Action to schedule a new Screenshot Job with Websiteshot."
LABEL "com.github.actions.icon"="gear"
LABEL "com.github.actions.color"="blue"
LABEL "repository"="https://github.com/websiteshot/github-action"
LABEL "homepage"="https://websiteshot.app"
LABEL "maintainer"="Adam Urban <adam@websiteshot.app>"

# Copy over project files
COPY . .

# Install dependencies
RUN npm install

# Build Project
RUN npm run build

# This is what GitHub will run
ENTRYPOINT ["node", "/dist/index.js"]
