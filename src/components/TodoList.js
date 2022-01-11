import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.tasksToDo.map(todo => {
            return (<Todo key={todo.id} handleToggle={this.props.handleToggle} todo={todo}/>)
          })
        }
      </ul>
    )
  }
}

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js