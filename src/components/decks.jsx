import React from 'react';
import { connect } from 'react-redux';
import { loadDecks } from '../stores/decks';

class Decks extends React.Component {
  componentDidMount() {
    console.log('props', this.props);
    this.props.loadDecks();
  }

  renderCard(n) {
    return (
      <div key={n} className="card">
        <div className="card-body">
          <h5 className="card-title">Card title: plop</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="card-deck">
          {this.props.decks && this.props.decks.map(n => this.renderCard(n))}
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
