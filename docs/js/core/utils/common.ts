import type { App } from 'vue'
type PropertyType = 'component' | 'mixin' | 'directive'
type Properties = Record<string, object>

export function registerGlobalProperties(
  type: PropertyType,
  app: App<Element>,
  properties: Properties
) {
  if (!['mixin', 'component', 'directive'].includes(type)) {
    throw new Error('Global property type must be a mixin or a component')
  }

  for (const property of Object.keys(properties)) {
    if (type === 'component') {
      app.component(property, properties[property])
    }

    if (type === 'directive') {
      app.directive(property, properties[property])
    }
  }
}
