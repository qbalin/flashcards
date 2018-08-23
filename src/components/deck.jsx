import React from 'react';
import { connect } from 'react-redux';
import { loadFullDeck } from '../stores/decks';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import CramView from './cramView';
>>>>>>> Add a cram view

class Deck extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cramMode: false,
    };
  }

  componentDidMount() {
    this.props.loadFullDeck(this.props.deckId);
  }

  renderSide = side => (
    <li className="list-group-item" key={side.id}>{side.content}</li>
  )

  renderCard = card => (
    <div key={card.id} className="card" style={{'min-width': '10rem', 'max-width': '10rem'}}>
      <ul className="list-group list-group-flush">
        {card.sides.map(this.renderSide)}
      </ul>
    </div>
  )

  startCramMode = () => this.setState({ cramMode: true });

  renderCardList = () => (
    <div>
      <button type="button" onClick={this.startCramMode} className="btn btn-outline-primary">Start</button>
      <div className="card-deck">
        {this.props.deck.cards.map(this.renderCard)}
      </div>
    </div>
  );

  renderCramMode = () => {

  }

  render() {
    return this.props.deck ? (
      <div>
<<<<<<< HEAD
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to='/'>Decks</Link></li>
            <li class="breadcrumb-item"><a href="#">{this.props.deck.name}</a></li>
          </ol>
        </nav>
        <button type="button" className="btn btn-outline-primary">Start</button>
        <div className="card-deck">
          {this.props.deck.cards.map(this.renderCard)}
        </div>
=======
        { this.state.cramMode ? <CramView deck={this.props.deck} /> : this.renderCardList() }
>>>>>>> Add a cram view
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
