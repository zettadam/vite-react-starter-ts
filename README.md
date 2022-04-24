# Introduction
This is a starter for a [React](https://reactjs.org/) project built using [Vite](https://vitejs.dev/).

# Getting started

## Prerequisites

Before you can start, make sure that you have NodeJS installed on your system. There are, beside running standard installers, various ways of installing and managing NodeJS depending on your OS. Follow your prefered method. Here are a few:

- [NodeJS Version Manager](https://github.com/nvm-sh/nvm) (Linux and MacOS)
- [NodeJS Version Manager](https://github.com/coreybutler/nvm-windows) (Windows)
- [asdf Plugin for NodeJS](https://github.com/asdf-vm/asdf-nodejs)

## Installation process

### Application

Run a standard NPM install process to install all application dependencies :

```sh
npm i
```

Assuming that everything went well, you're almost ready to start.

> **NOTE:** The built-in server will run in HTTPS mode (if you created local certificates). In order to create and install local certificates you might want to [follow these instructions](https://stackoverflow.com/questions/69417788/vite-https-on-localhost). _(Since you might want to reuse created certificates, store them in `.cert` directory at the root of this repo. See `app/vite.config.js` file to change paths to your certificates.)_

### End-to-end framework

Each version of Playwright framework requires specific versions of browsers installed. Run this command to install supported browsers:

```sh
npx playwright install
```

> **NOTE:** You can optionally install only selected browsers, see [install browsers](https://playwright.dev/docs/cli#install-browsers) for more details. Or you can install no browsers at all and use existing [browser channels](https://playwright.dev/docs/browsers).


## Software dependencies

Besides obvious dependency on React, the goal of this project is to provide tools and configuration to:

- set up a ready and comfortable space for developing and testing a React front-end project
~~- deploy the app to testing and production environments.~~

We selected some tools:

- [Vite](https://vitejs.dev/) (build tool)
- [Vitest](https://vitest.dev/) (unit testing framework)
- [Eslint](https://eslint.org) (static code analyzer)
- [Prettier](https://prettier.io) (code formatter)
- [Playwright](https://playwright.dev/) (end-to-end testing framework)

> **Note**: It is not a goal of this starter to select any React component library.

# Run unit tests
TODO: Describe how to run unit tests

# Build ~~and deploy~~
TODO: Describe how to build ~~and deploy~~ the application to various environments.

# Run e2e tests
TODO: Describe how to run e2e tests.

# Contribute
TODO: Explain how other users and developers can contribute to make your code better.