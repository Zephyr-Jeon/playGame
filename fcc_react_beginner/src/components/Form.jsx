// https://reactjs.org/docs/forms.html
// Formic => library for react format
import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      textArea: '',
      isFriendly: false,
      gender: '',
      favColor: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // In javaScript whenever event occurs
  // it sends its information through event parameter
  // each time typed, handleChange funtion fires and set event value(what typed)
  // Computed object property names and destructuring
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring

  handleChange(event) {
    console.log(event.target);
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  handleSubmit(event) {
    console.log(event);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <textarea
            type="textarea"
            name="textArea"
            value={this.state.textArea}
            placeholder="Some default value"
            onChange={this.handleChange}
          />
          <br />
          <label>
            is friendly?
            <input
              type="checkbox"
              name="isFriendly"
              checked={this.state.isFriendly}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Male
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === 'male'}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === 'female'}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Favorite Color
            <select
              value={this.state.favColor}
              onChange={this.handleChange}
              name="favColor"
            >
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
            </select>
          </label>
          <h1>
            {this.state.firstName} {this.state.lastName}
          </h1>
          <h2>You are {this.state.gender}</h2>
          <h3>Your favorite color is {this.state.favColor}</h3>
          <button>Submit</button>
        </form>
      </React.Fragment>
      //when button found in form, it functions as submit and will be fired on onSubmit
    );
  }
}

export default Form;
