import React, { Component } from 'react';
import { render } from 'react-dom';

/* import the MainScreen component drawn above in Pagedraw */
import MainScreen from './src/pagedraw/mainscreen'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{content: "Meet with Yoda"}, {content: "Defeat Darth Vader"}]
    };
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return {...todo, toggle: (() => this.toggleTodo(i)), 
        delete: (() => this.deleteTodo(i))}
    });
    return (
      <MainScreen
        list={todos}
        itemsLeft={this.state.todos.filter((elem) => !elem.completed).length}
        addTodo={this.addTodo}
        toggleAll={this.toggleAll} />
    );
  }

  addTodo = (text) => {
    this.setState({todos: this.state.todos.concat({content: text})});
  }

  deleteTodo(id) {
    this.setState({todos: this.state.todos.filter((todo, i) => i != id)});
  }

  toggleTodo(id) {
    this.setState({todos: this.state.todos.map((todo, i) =>
      i === id ? {...todo, completed: !todo.completed} : todo
    )});
  }

  toggleAll = () => {
    const areAllMarked = this.state.todos.every(todo => todo.completed)
    this.setState({todos: this.state.todos.map(todo => {
      return {...todo, completed: !areAllMarked}
    })});
  }
}

render(<App />, document.getElementById('root'));

