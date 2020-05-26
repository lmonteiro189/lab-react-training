import React, { Component } from 'react';

class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
    };
  }

  changeLikeStatus = () => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeLikeStatus}> Like </button>
        {/* <span>{this.state.liked ? 'Liked' : 'Not Liked'}</span> */}
        <span>{(this.state.liked && '👍') || '👎'}</span>

        {/* no need to steatment conditions, just shows if was true
        - */}
        {this.state.liked && (
          // fragment from React, authorize to create empty TAGs.
          <>
            <br></br>
            <em>
              Thank <strong>YOU</strong> for liking!
            </em>
            <br></br>
            <em>Join us on Facebook!</em>
          </>
        )}
      </div>
    );
  }
}
export default LikeButton;
