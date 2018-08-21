import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import Router from './components/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import reducer from './stores';
import { plop } from './db/init';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

const domContainer = document.getElementById('app');
ReactDOM.render(<Router store={store} />, domContainer);
