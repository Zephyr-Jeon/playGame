import React, { Component } from 'react';

class MemeGenerator extends Component {
  state = {
    isLoading: true,
    topText: '',
    bottomText: '',
    randomImg: 'http://i.imgflip.com/1bij.jpg',
    allMemeImgs: [],
  };

  componentDidMount() {
    // where you bring data from
    fetch('https://api.imgflip.com/get_memes')
      .then((resolve) => resolve.json()) // turn the data into javaScript obj
      .then((resolve) => {
        console.log(resolve);
        const { memes } = resolve.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    // const state = { ...this.state };
    // state[name] = value;
    // this.setState({...state})
    this.setState({ [name]: value });
    // both ways work
  };

  handleImg = (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomImg = this.state.allMemeImgs[random].url;
    const state = { ...this.state };
    state.randomImg = randomImg;
    this.setState({ ...state });
  };

  render() {
    return (
      <main>
        <form className="meme-form">
          <label>
            <input
              type="text"
              name="topText"
              placeholder="Top Text"
              value={this.state.topText}
              onChange={this.handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="bottomText"
              placeholder="Bottom Text"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
          </label>
          <button
            className={
              this.state.topText && this.state.bottomText ? 'btn btn-on' : 'btn'
            }
            onClick={this.handleImg}
          >
            Gen
          </button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="text-top">{this.state.topText}</h2>
          <h2 className="text-bottom">{this.state.bottomText}</h2>
        </div>
      </main>
    );
  }
}

export default MemeGenerator;
