import { Component, h, render } from 'powerjs-lib';

import './todo.scss';

class Todo extends Component {
  constructor(props) {
    super(props);

    const todos = [];

    for (var i = 1; i <= 10; i++) {
      todos.push(`item ${i}`);
    }

    this.addTodo = this.addTodo.bind(this);

    this.state = {
      todos,
      hide: false
    };
  }

  addTodo(e) {
    const key = e.keyCode || e.charCode;
    const target = e.target;

    if(key === 13){
      const state = { ...this.state };
      const todos = [ ...state.todos ];

      todos.push(target.value);

      state.todos = todos;

      if(state.hide){
        state.hide = false;
      }

      this.setState(state, () => {
        target.value = '';
      });
    }
  }

  removeTodo(index) {
    const state = { ...this.state };
    const todos = [ ...state.todos ];

    todos.splice(index, 1);

    state.todos = todos;

    if(!state.todos.length){
      state.hide = true;
    }

    this.setState(state);
  }

  renderTodos() {
    return this.state.todos.map((todo, index) => (
      <li>
        <label htmlFor={`item_${index}`}>
          <input type="checkbox" id={`item_${index}`} />
          <span><b>{todo}</b></span>
        </label>
        <button onClick={this.removeTodo.bind(this, index)}>×</button>
      </li>
    ));
  }

  render() {
    const classes = this.state.hide ? 'hide' : '';

    const style = {
      color: this.state.hide ? '#cc0000' : '#000'
    };

    return (
      <div id="todos">
        <h1 style={style}>Todo List</h1>
        <input type="text" onKeyUp={this.addTodo} placeholder="What do you need to do today?" />
        <ul className={classes}>{this.renderTodos()}</ul>
      </div>
    )
  }
}

export default Todo;
