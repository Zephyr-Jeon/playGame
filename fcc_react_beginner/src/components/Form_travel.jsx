import React, { Component } from 'react';
import Form_travel_ui from './Form_travel_ui';

class Form_travel extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      isVegan: false,
      isKosher: false,
      isLactoseFree: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h1>Loading ......</h1>
        ) : (
          <Form_travel_ui handleChange={this.handleChange} data={this.state} />
        )}
      </div>
    );
  }
}

export default Form_travel;
