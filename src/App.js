import React from 'react';

const thingsToDo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      thingsToDo: thingsToDo,
    };
  }

  toggleFinished = () => {
    const updatedToDoList = this.state.thingsToDo.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, finished: !todo.finished}
      } else {
        return todo;
      }
    })

    this.setState({
      ...this.state,
      thingsToDo: updatedToDoList,
    })
  }

  addToDo = (todoName) => {
    this.setState({
      thingsToDo: [
        ...this.state.thingsToDo,
        {
          task: todoName,
          id: Date.now,
          finished: false,
        },
      ],
    });
  };

  clearFinished = () => {
    this.setState({
      ...this.state,
      thingsToDo: this.state.thingsToDo.filter((todo) => !todo.finished),
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input placeholder='New Task...'></input>
        <button>Add New Task</button>
        <button>Clear Completed Tasks</button>
      </div>
    );
  }
}

export default App;
