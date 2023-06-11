/**
 * `uuidv4`
 * 
 * Generates a unique uuid4 string
 * 
 * @returns string
 */
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, char => {
    const randomChar = Math.random() * 16 | 0,
          value = char == 'x' ? randomChar : (randomChar & 0x3 | 0x8)
          
          return value.toString(16)
  })
}

/**
 * `parameterizeObject`
 * 
 * Converts an object to query params
 * @param {object} object An object to covert
 * @returns {string} 
 */
export const parameterizeObject = object => {
  let queryParams = ''
  const keysCount = Object.keys(object).length

  Object.keys(object).forEach((key, index) => {
    if (index < keysCount - 1) {
      queryParams += `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}&`
    } else {
      queryParams += `${encodeURIComponent(key)}=${encodeURIComponent(object[key])}`
    }
  })

  return queryParams
}

/**
 * `registerGlobalProperties`
 * 
 * Registers global properties
 * 
 * @param {string} type Type of the property to register 
 * @param {object} app An instance of vue application
 * @param {object} properties An object of global properties with key,value pairs
 */
export const registerGlobalProperties = (type, app, properties) => {
  if (!['mixin', 'component'].includes(type)) {
    console.error('Global property type must be a mixin or a component')
    return null
  }

  for (const property of Object.keys(properties)) {
    if (type === 'component') {
      app.component(property, properties[property])
    } else {
      app[type](properties[property])
    }
  }
}