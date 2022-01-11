import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasksToDo: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        },
      ] 
    }
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      tasksToDo: this.state.tasksToDo.filter(tasks => {
        return (tasks.completed === false);
      })
    });
  }

  handleAdd = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state,
      tasksToDo: [...this.state.tasksToDo, newTask]
    });
  }

  render() {
    const { tasksToDo } = this.state;

    return (
      <div>
        <h1>Tasks I Have To Do</h1>
        <TodoList tasksToDo={tasksToDo} />
        <TodoForm handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;
