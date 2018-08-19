import React from 'react';

export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  onClick = () => {
    this.setState({ liked: true });
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button type="button" onClick={this.onClick}>Like</button>
    );
  }
}
