import React from 'react';
import { connect } from 'react-redux';
import { loadFullDeck } from '../stores/decks';
import PropTypes from 'prop-types';

class CramView extends React.Component {
  static propTypes = {
    deck: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);

console.log(props)
    this.state = {
      viewedCardIds: [],
      currentCard: props.deck.cards[0],
    };
  }

  renderCard = () => {
    return (
      <div className="card" style={{'width': '18rem'}}>
  <div className="card-img-top" >{this.renderCarousel()}</div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    );
  }

  renderCarousel = () => {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block w-100 text-center" style={{background: 'grey'}}>{this.state.currentCard.sides[0].content}</div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100 text-center" style={{background: 'grey'}}>{this.state.currentCard.sides[1].content}</div>
          </div>
          <div className="carousel-item">
            <div className="d-block w-100 text-center" style={{background: 'grey'}}>{this.state.currentCard.sides[2].content}</div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }

  render() {
    return <div className='row'>{this.renderCard()}</div>;
  }
}

export default CramView;
