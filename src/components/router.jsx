import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Decks from './decks';


export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Decks} />
        </div>
      </Router>
    );
  }
}
