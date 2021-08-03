const { ls,  } = require('shelljs')
const path = require('path')
const fs = require('fs')

/**
 * `createLayout`
 * 
 * Initialized application bootstrap layout and a default layout
 * 
 * @param {string} layoutsDirPath Path for layouts directory
 */
function createLayout(layoutsDirPath) {
  try {
    const defaultLayouts = [
      'BootstrapLayout.vue',
      'DefaultLayout.vue'
    ]
    const existingLayouts = ls(layoutsDirPath).filter(file => typeof file === 'string')

    for (const layout of defaultLayouts) {
      const source = path.resolve(__dirname, `../docs/layouts/${layout}`)
      const fileStats = fs.lstatSync()

      if (!existingLayouts.includes(layout)) {
        console.log(source)
      }
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = createLayout
