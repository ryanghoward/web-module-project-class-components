import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input placeholder='New Task...'/>
          <button>Add Task</button>
      </form>
    )
  }
}

export default TodoForm;