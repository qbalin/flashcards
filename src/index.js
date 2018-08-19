import ReactDOM from 'react-dom';
import React from 'react';
import Router from './components/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(Router), domContainer);
