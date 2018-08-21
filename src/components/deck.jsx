import React from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../stores/cards';

class Deck extends React.Component {
  componentDidMount() {
    console.log('will load', this.props.deckId);
    this.props.loadCards(this.props.deckId);
  }

  renderSide = side => (
    <p className="card-text">{side.content}</p>
  )

  renderCard = card => (
    <div key={card.id} className="card">
      <div className="card-body">
        {card.id}
      </div>
    </div>
  )

  render() {
    return this.props.cards ? (
      <div>
        <button type="button" className="btn btn-outline-primary">Start</button>
        <div className="card-deck">
          {this.props.cards.map(this.renderCard)}
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { deckId } = ownProps.match.params;
  return {
    cards: state.cards,
    deckId: parseInt(deckId),
  };
};

const mapDispatchToProps = dispatch => ({
  loadCards: deckId => dispatch(loadCards(deckId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Deck);
