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

  render() {
    const { tasksToDo } = this.state;

    return (
      <div>
        <h1>Tasks I Have To Do</h1>

        <TodoList tasksToDo={tasksToDo} />
        <TodoForm />

        <button>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;
