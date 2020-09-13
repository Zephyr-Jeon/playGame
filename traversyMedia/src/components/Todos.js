import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    // when using map, each list created by map needs key
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// PropTypes // checking types of props
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
