import React from 'react';
import { connect } from 'react-redux';
import { loadCards } from '../stores/cards';

class Deck extends React.Component {
  componentDidMount() {
    this.props.loadCards();
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
  return { cards: state.cards };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCards: () => dispatch(loadCards(1)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Deck);
