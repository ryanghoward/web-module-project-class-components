import React from 'react';

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
        <ul>
          {
            tasksToDo.map(todo => {
              return (<li>{todo.task} { todo.completed ? <span> - Completed</span> : <span></span> }</li>)
            })
          }
        </ul>

          <form>
            <input placeholder='New Task...'/>
            <button>Add Task</button>
          </form>

          <button>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;
