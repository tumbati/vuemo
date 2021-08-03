import __exampleService__ from './example-service'

/**
 * Add your global service below to import them individually
 * 
 * @USAGE
 * 
 * import { ExampleService } from '@/core/services
 */
export const ExampleService = __exampleService__


/**
 * Add your global service below to include in global service object
 * 
 * @USAGE
 * 
 * import GlobalService from '@/core/services
 * 
 * async function fetchTodoList() {
 *    const example = new GlobalService.ExampleService()
 *    const todos = await example.getTodoList()
 *    console.log(todos)
 * }
 */
export default {
  ExampleService
}