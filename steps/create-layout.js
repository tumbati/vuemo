const { ls } = require('shelljs')

/**
 * `createLayout`
 * 
 * Initialized application bootstrap layout and a default layout
 * 
 * @param {string} layoutsDirPath Path for layouts directory
 */
function createLayout(layoutsDirPath) {
  const defaultLayouts = [
    'BootstrapLayout.vue',
    'DefaultLayout.vue'
  ]

  const existingLayouts = ls(layoutsDirPath).filter(file => typeof file === 'string')

  console.log(existingLayouts)
}

module.exports = createLayout
