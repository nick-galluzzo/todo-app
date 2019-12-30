import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store/store'

window.store = configureStore;

ReactDOM.render(
      <App />, document.getElementById('content')
  );
