import moment from 'moment'

const calculateAge = value => {
  const now = moment(Date.now())
  const then = moment(value)

  const years = now.diff(then, 'years')

  if (years > 0) {
    return `${years} ${years > 1 ? 'yrs' : 'yr'}`
  } else {
    const months = now.diff(then, 'months')

    if (months > 0) {
      return `${months} ${months > 1 ? 'mons' : 'mon'}`
    } else {
      const days = now.diff(then, 'days')
      if (days === 0) {
        return 'born today'
      }

      return `${days} ${days > 1 ? 'days' : 'day'}`
    }
  }
}

export default {
  install: (app, options) => {
    app.config.globalProperties.$filters = {
      date: (value, format) => moment(value).format(format),
      age: value => calculateAge(value),
      uppercase: value => value.toUpperCase(),
      keysOf: value => Object.keys(value),
      isEmpty: value => {
        if (typeof value === 'undefined' || typeof value === 'string' && !value) {
          return true
        }

        if (Array.isArray(value)) {
          return value.length === 0
        }

        if (typeof value === 'object') {
          return Object.keys(value).length === 0
        }
      },
      uppercase: value => value?.toUpperCase(),
      lowercase: value => value?.toLowerCase(),
      initials: (start, end) => `${start.charAt(0)}${end.charAt(0)}`
    }

    app.provide('$filters', options)
  }
}