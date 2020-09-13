import React, { Component } from 'react';

class MemeGeneratorHeader extends Component {
  state = {};
  render() {
    return (
      <header>
        <h1 className="header">
          <img
            className="troll-face"
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            alt=""
          />
          Meme Generator
        </h1>
      </header>
    );
  }
}

export default MemeGeneratorHeader;
