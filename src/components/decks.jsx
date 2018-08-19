import React from 'react';

export default class Decks extends React.Component {
  renderCard(n) {
    return (
      <div key={n} className="card">
        <img className="card-img-top" src="..." alt="" />
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
          {[1, 2, 3].map(n => this.renderCard(n))}
        </div>
      </div>
    );
  }
}
