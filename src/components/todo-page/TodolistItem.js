import React from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';
import './TodoApp.css';

export default class TodolistItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false })
  }

  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      background: isCompleted ? '#6fe000' : '#f08800',
      cursor: 'pointer',
      color: 'white'
    };

    if(this.state.isEditing) {
      return(
        <td>
         <form onSubmit={this.onSaveClick.bind(this)}>
            <input
                className="taskEditInput"
                type="text"
                defaultValue={task}
                ref="editInput"
            />
          </form>
        </td>
      );
    }

    const Todoblock = () => (
      <td className="TodoblockItem">
        <ListGroupItem style={taskStyle}
            onClick={this.onEditClick.bind(this)}>
              {task}
        </ListGroupItem>
      </td>
    );

    if(isCompleted) {
      return (
        <td>
          <table>
          <tbody>
            <tr>
                <td>
                  <Button className="CheckButton"
                          onClick={this.props.toggleTask.bind(this, task)}>
                      &#9745;
                  </Button>
                </td>
                <Todoblock/>
            </tr>
          </tbody>
          </table>
        </td>
      );
    }

    return (
      <td>
        <table>
        <tbody>
          <tr>
              <td>
                  <Button className="CheckButton"
                          onClick={this.props.toggleTask.bind(this, task)}>
                      &#9744;
                  </Button>
              </td>
              <Todoblock/>
          </tr>
        </tbody>
        </table>
      </td>
    );
  }

  renderActionsSection() {
    if (this.state.isEditing)  {
      return (
        <td className="ActionSection">
          <Button className="ActButton"
                  onClick={this.onSaveClick.bind(this)}>&#10003;</Button>
          <Button className="CancelButton"
                  onClick={this.onCancelClick.bind(this)}>&#8630;</Button>
        </td>
      );
    }

    return (
      <td className="ActionSection">
        <Button className="ActButton"
                onClick={this.props.deleteTask.bind(this, this.props.task)}>
            &#10007;
        </Button>
      </td>
    );
  }

  render () {
    return (
      <tr className="TodoBlocks">
          {this.renderTaskSection()}
          {this.renderActionsSection()}
      </tr>
    );
  }
}
