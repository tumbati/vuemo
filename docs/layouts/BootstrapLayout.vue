<template>
  <component :is="layout || 'div'">
    <router-view :layout.sync="layout" />
  </component>
</template>

<script>
import DefaultLayout from './DefaultLayout.vue'
import { markRaw } from 'vue'

export default {
  name: "AppLayout",

  data: () => ({
    layout: markRaw(DefaultLayout)
  }),

  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          if (route.meta.layout) {
            const component = await import(`@/layouts/${route.meta.layout}.vue`)
            this.layout = markRaw(component?.default) || markRaw(DefaultLayout)
          }
        } catch (e) {
          this.layout = markRaw(DefaultLayout)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
