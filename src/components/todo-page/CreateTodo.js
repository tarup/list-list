import React from "react";
import _ from "lodash";
import './CreateTodo.css';
import { Button, InputGroup, FormGroup } from 'react-bootstrap';

export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  renderError() {
    if(!this.state.error) { return null; }

    return <div style={{ color: 'red' }}>{this.state.error}</div>
  }

  /*Submits new task*/
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>

        <FormGroup>
          <InputGroup className="TodoInput">
            <input
               className="MyInputStyle"
               type="text"
               placeholder="What do?"
               ref="createInput"
            />
            <InputGroup.Button>
              <Button type="submit">Create</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>

        {this.renderError()}
      </form>
    );
  }

  /*Creates new task after validation*/
  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if(validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);      // Pass input value (TodoApp.js)
    this.refs.createInput.value = ""; // Initialize inputfield
  }

  /*Checks if task is empty or identical*/
  validateInput(task) {
    if(!task) {
      return 'Please enter the task.';
    } else if(_.find(this.props.allItems, todo => todo.task === task)) {
      return 'Task already exists.'
    } else {
      return null;
    }
  }
}
