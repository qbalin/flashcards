import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import Router from './components/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import reducer from './stores';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const domContainer = document.getElementById('app');
ReactDOM.render(<Router store={store} />, domContainer);
