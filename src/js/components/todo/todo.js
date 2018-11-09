import Power, { Component } from '@power-js/core';

let nodeId = 0;

const TodoItems = ({ items, onRemove }) => {
  return items.map((todo, index) => (
    <li key={todo.key}>
      <label htmlFor={`item_${todo.key}`}>
        <input type="checkbox" id={`item_${todo.key}`} />
        <span>{todo.value}</span>
      </label>
      <button onClick={e => onRemove(todo)}>×</button>
    </li>
  ));
};

class Todo extends Component {
  constructor(props) {
    super(props);

    const todos = [];

    for (let i = 1; i <= props.total; i++) {
      todos[todos.length] = {
        value: `item ${i}`,
        key: `${nodeId++}`
      };
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      todos,
      hide: false
    };
  }

  addTodo(e) {
    const key = e.keyCode || e.charCode;
    const target = e.target;

    if (key === 13) {
      const state = { ...this.state };
      const todos = [...state.todos];

      todos.push({ value: target.value, key: nodeId++ });

      state.todos = todos;

      if (state.hide) {
        state.hide = false;
      }

      this.setState(state, () => {
        target.value = '';
      });
    }
  }

  removeTodo(todo) {
    const state = { ...this.state };
    const todos = [...state.todos];

    const i = todos.indexOf(todo);

    todos.splice(i, 1);

    state.todos = todos;

    if (!state.todos.length) {
      state.hide = true;
    }

    this.setState(state);
  }

  renderTodos() {
    return this.state.todos.map((todo, index) => (
      <li key={todo.key}>
        <label htmlFor={`item_${todo.key}`}>
          <input type="checkbox" id={`item_${todo.key}`} />
          <span>{todo.value}</span>
        </label>
        <button onClick={this.removeTodo.bind(this, todo)}>×</button>
      </li>
    ));
  }

  render() {
    const classes = this.state.hide ? 'hide' : '';
    const style = { color: this.state.hide ? '#cc0000' : '#000' };
    return (
      <div id="todos">
        <h1 style={style}>Todo List</h1>
        <input type="text" onKeyUp={this.addTodo} placeholder="What do you need to do today?" />
        <ul className={classes}>
          <TodoItems items={this.state.todos} onRemove={this.removeTodo} />
        </ul>
      </div>
    );
  }
}

export default Todo;
