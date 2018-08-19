import React from 'react';
import { connect } from 'react-redux';

class Deck extends React.Component {
  renderSide = side => (
    <p className="card-text">{side.content}</p>
  )

  renderCard = card => (
    <div key={card.name} className="card">
      <div className="card-body">
        {card.sides.map(this.renderSide)}
      </div>
    </div>
  )

  render() {
    return (
      <div>
        <button type="button" className="btn btn-outline-primary">Start</button>
        <div className="card-deck">
          {this.props.deck.cards.map(this.renderCard)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { deckName } = ownProps.match.params;
  return { deck: state.decks.find(deck => deck.name === deckName) };
};


export default connect(mapStateToProps)(Deck);
