import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo } from './actions/todo_actions';
import Root from './components/root';


window.store = configureStore;

ReactDOM.render(
      <Root />, document.getElementById('content')
  );
