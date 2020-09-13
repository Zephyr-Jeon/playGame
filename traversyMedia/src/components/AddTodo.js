import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    // whenever you type, e has the value you typed
    console.log(e.target.value);
    // this.setState({ title: e.target.value }); or for expandability
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{ flex: '10', padding: '0.5em' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
