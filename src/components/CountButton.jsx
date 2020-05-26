import React, { Component } from 'react';

class CountButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>
          {' '}
          <span>{this.state.count}</span> Likes{' '}
        </button>
      </div>
    );
  }
}

export default CountButton;
