import store from './store'

export const log = (type, exception) => {
  console.log(`[${type}]`, exception)

  if (type === 'error') {
    broadcast(exception)
  }

}

const broadcast = e => {
  store.dispatch('exception', {
    display: true,
    error: e.error,
    message: e.message
  })
}

const Logger = {
  log
}

export default Logger
