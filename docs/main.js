import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'

/**
 * Application Core
 */
import store from './core/store'
import router from './core/router'

/**
 * Global application filters
 */
import filters from './core/filters'


/**
 * Global Properties Register
 */
import { registerGlobalProperties } from './core/helpers/common'


/**
 * Add your custom components for global registration
 * 
 * @example
 * 
 * import Dialogs from './core/dialogs'
 */


/**
 * Third-party Plugins
 */
//... goes here

const app = createApp(App)

/**
 * This is called after initializing an instance of Vue
 */
registerGlobalComponents(app, {
  // ...Dialogs
})

app.use(filters)
  .use(store)
  .use(router)
  .mount('#app')
