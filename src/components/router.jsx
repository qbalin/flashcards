import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Decks from './decks';
import Deck from './deck';
import Navbar from './navbar';


export default class Routes extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Navbar />
          <div className="container">
            <Router>
              <div>
                <Route exact path="/" component={Decks} />
                <Route exact path="/decks/:deckId" component={Deck} />
              </div>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}
