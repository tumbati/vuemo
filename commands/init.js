const { rm } = require('../lib')
const currentPath = process.cwd()

const steps = require('../steps')

function init(flag, ...options) {
  console.log(flag)
  // /**
  //  * Mount root directory structure
  //  */
  // steps.mountRoot(currentPath)

  // /**
  //  * Remove views folder recursively from src directory
  //  */
  // rm(`${currentPath}/src/views`)

  // /**
  //  * Create core module files
  //  */
  // steps.createCore(`${currentPath}/src/core`)

  // /**
  //  * Create application bootstrap layout and default layout
  //  */
  // steps.createLayout(`${currentPath}/src/layouts`)
}

module.exports = init
