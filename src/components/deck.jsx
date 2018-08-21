import React from 'react';
import { connect } from 'react-redux';
import { loadFullDeck } from '../stores/decks';

class Deck extends React.Component {
  componentDidMount() {
    this.props.loadFullDeck(this.props.deckId);
  }

  renderSide = side => (
    <p className="card-text" key={side.id}>{side.content}</p>
  )

  renderCard = card => (
    <div key={card.id} className="card">
      <div className="card-body">
        {card.sides.map(this.renderSide)}
      </div>
    </div>
  )

  render() {
    return this.props.deck ? (
      <div>
        <button type="button" className="btn btn-outline-primary">Start</button>
        <div className="card-deck">
          {this.props.deck.cards.map(this.renderCard)}
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { deckId } = ownProps.match.params;
  return {
    deck: state.decks.currentDeck,
    deckId: parseInt(deckId),
  };
};

const mapDispatchToProps = dispatch => ({
  loadFullDeck: deckId => dispatch(loadFullDeck(deckId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Deck);
