import React, { Component } from 'react';
import Form_travel from './components/Form_travel';
import MemeGeneratorHeader from './components/MemeGeneratorHeader';
import MemeStart from './components/MemeStart';
import MemeGenerator from './components/MemeGenerator';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    isStarted: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  handleStartBtn = () => {
    this.setState((prevState) => {
      return {
        isStarted: !prevState.isStarted,
      };
    });
    console.log(this.state.isStarted);
  };

  render() {
    return (
      <React.Fragment>
        <MemeGeneratorHeader />
        {this.state.isLoading ? (
          <h1>Loading ...</h1>
        ) : (
          <MemeStart
            isStarted={this.state.isStarted}
            handleStartBtn={this.handleStartBtn}
          />
        )}
        {this.state.isStarted ? <MemeGenerator /> : null}
        <br />
      </React.Fragment>
    );
  }
}

export default App;
