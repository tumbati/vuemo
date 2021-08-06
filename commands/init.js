const {ls, rm} = require('../lib')
const chalk = require('chalk')
const fs = require('fs')
const fse = require('fs-extra')
const currentPath = process.cwd()
const emoji = require('node-emoji')

const steps = require('../steps')

function init(...options) {
  steps.mountRoot()

  /**
   * Remove views folder recursively from src directory
   */
  rm(`${currentPath}/src/views`)

  /**
   * Create core module files
   */
  steps.createCore(`${currentPath}/src/core`)

  /**
   * Create application bootstrap layout and default layout
   */
  steps.createLayout(`${currentPath}/src/layouts`)
}

module.exports = init
