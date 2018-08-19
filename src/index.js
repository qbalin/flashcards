import ReactDOM from 'react-dom';
import React from 'react';
import LikeButton from './like_button.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(LikeButton), domContainer);
