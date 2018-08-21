import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadDecks } from '../stores/decks';

class Decks extends React.Component {
  componentDidMount() {
    this.props.loadDecks();
  }

  renderDeck = deck => (
    <div key={deck.id} className="card text-center">
      <div className="card-body ">
        <h5 className="card-title">
          <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
        </h5>
      </div>
    </div>
  )

  render() {
    return (
      <div>
        <div className="card-deck">
          {this.props.decks.map(deck => this.renderDeck(deck))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  decks: state.decks,
});

const mapDispatchToProps = dispatch => ({
  loadDecks: () => dispatch(loadDecks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Decks);
