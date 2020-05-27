import React, { Component } from 'react';

class Clickable extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
    };
  }

  changePhoto = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    const img = this.props.img;
    const imgOne = this.props.imgOne;

    return (
      <div className="clickable-picture">
        <button onClick={this.changePhoto}>
          <p>
            {(this.state.clicked && <img src={img} />) || <img src={imgOne} />}
          </p>
        </button>
      </div>
    );
  }
}

export default Clickable;
