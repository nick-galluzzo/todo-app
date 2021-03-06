import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state)
  const nextState = {}
  switch (action.type) {
    case RECEIVE_TODOS:
      action.payload.forEach((todo) => {
        nextState[todo.id] = todo
      });
      return nextState
    case RECEIVE_TODO:
      const newTodo = {[action.payload.id]: action.payload};
      const newState = Object.assign({}, state, newTodo);
      return newState
    case REMOVE_TODO:
      const removeTodo = {[action.payload.id]: action.payload};
      nextState = Object.assign({}, state);
      delete nextState[action.payload.id];
      return nextState
    default:
      return state;
  }
};

export default todosReducer;
