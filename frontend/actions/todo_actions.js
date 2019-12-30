export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  payload: todos
})

const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  payload: todo
})
