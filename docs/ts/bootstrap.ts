import type { App } from 'vue'

// Add packages

import { registerGlobalProperties } from './core/utils/common'

/**
 * `install`
 *
 * Mounts global properties
 * @example
 *
 * registerGlobalProperties('component', app, components) // Registers a global component
 * registerGlobalProperties('directive', app, directives) // Registers a global directive
 */
export function install(app: App<Element>) {
  // Mount global properties here
}

export default {
  install
}
