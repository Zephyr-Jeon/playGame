// https://www.youtube.com/watch?v=sBws8MSXN7A&t=717s
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

class App extends Component {
  // off for Axios

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with husband',
        completed: false,
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false,
      },
    ],
  };

  // for Axios

  // state = {
  //   todos: [],
  // };

  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos?_limit=4')
  //     .then((res) => this.setState({ todos: res.data }));
  // }

  // Toggle Complete
  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Add Todo

  // off for Axios
  addTodo = (title) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      title, // title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  // for Axios
  // addTodo = (title) => {
  //   axios
  //     .post('https://jsonplaceholder.typicode.com/todos', {
  //       title,
  //       completed: false,
  //     })
  //     .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  // };

  // Delete Todo

  // off for Axios
  delTodo = (id) => {
    console.log(id);
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // for Axios
  // delTodo = (id) => {
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  //     .then((res) =>
  //       this.setState({
  //         todos: [...this.state.todos.filter((todo) => todo.id !== id)],
  //       })
  //     );
  // };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact // hide this body on other routes
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
