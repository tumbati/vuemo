import { reactive, toRefs } from 'vue'

interface IExample {
  name: string
}

const exampleState = reactive<{ example: IExample }>({
  example: {
    name: ''
  }
})

// Add more state and their management here

export function useGlobalStore() {
  return {
    ...toRefs(exampleState),
  }
}
