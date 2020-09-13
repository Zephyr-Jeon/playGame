import React, { Component } from 'react';

class MemeStart extends Component {
  state = {};
  render() {
    return (
      <button
        className="start-btn"
        style={{ display: this.props.isStarted && 'none' }}
        onClick={this.props.handleStartBtn}
      >
        START
      </button>
    );
  }
}

export default MemeStart;
