import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} placeholder='New Task...'/>
          <button onClick={this.handleSubmit}>Add Task</button>
      </form>
    )
  }
}

export default TodoForm;