import React, { Component } from 'react';

class Form_travel_ui extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form>
          <input
            name="firstName"
            value={this.props.data.firstName}
            onChange={this.props.handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            name="lastName"
            value={this.props.data.lastName}
            onChange={this.props.handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            name="age"
            value={this.props.data.age}
            onChange={this.props.handleChange}
            placeholder="age"
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              //checked={this.state.gender === 'male'}
              onChange={this.props.handleChange}
            />{' '}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              //checked={this.state.gender === 'female'}
              onChange={this.props.handleChange}
            />{' '}
            Female
          </label>
          <br />
          <select
            name="destination"
            value={this.props.data.destination}
            onChange={this.props.handleChange}
          >
            <option value="">-- Please Choose a Destination --</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="north pole">North pole</option>
            <option value="south pole">South pole</option>
          </select>
          <br />
          <label>
            <input
              type="checkbox"
              name="isVegan"
              onChange={this.props.handleChange}
              //checked={this.state.dietaryRestrictions.isVegan}
            />
            Vegan?
            <input
              type="checkbox"
              name="isKosher"
              onChange={this.props.handleChange}
              //checked={this.state.dietaryRestrictions.isKosher}
            />
            Kosher?
            <input
              type="checkbox"
              name="isLactoseFree"
              onChange={this.props.handleChange}
              //checked={this.state.dietaryRestrictions.isLactoseFree}
            />
            Lactose Free?
          </label>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>
          Your name: {this.props.data.firstName} {this.props.data.lastName}
        </p>
        <p>Your age: {this.props.data.age}</p>
        <p>Your gender: {this.props.data.gender}</p>
        <p>Your destination: {this.props.data.destination}</p>
        <p>Your dietary restrictions: </p>
        <p>Vegan: {this.props.data.isVegan ? 'yes' : 'no'}</p>
        <p>Kosher: {this.props.data.isKosher ? 'yes' : 'no'}</p>
        <p>Lactose Free: {this.props.data.isLactoseFree ? 'yes' : 'no'}</p>
      </React.Fragment>
    );
  }
}

export default Form_travel_ui;
