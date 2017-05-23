import React from "react";
import _ from 'lodash';

import './TodoApp.css';
import Todos from './Todolist';
import CreateTodo from './CreateTodo';

const allItems = [
  {
    task: 'Code with React',
    isCompleted: false
  },
  {
    task: 'Watch Netflix',
    isCompleted: true
  }
];

export default class Todolist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems
    }
  }

  render() {
    return (
      <div>
        <h1 className="todolistHeader">TodoList</h1>
        <CreateTodo allItems={this.state.allItems}
                    createTask={this.createTask.bind(this)}/>
        <Todos
          allItems={this.state.allItems}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

  /*Set task done / undone*/
  toggleTask(task) {
    const foundTodo = _.find(this.state.allItems, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ allItems: this.state.allItems })
  }

  /*Push new object to list, rerender*/
  createTask(task) {
    this.state.allItems.push({
      task,
      isCompleted: false
    })
    this.setState({ allItems: this.state.allItems })
  }

  /*Replace old task with new input value*/
  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.allItems, todo => todo.task === oldTask);
    foundTodo.task  = newTask;
    this.setState({ allItems: this.state.allItems });

  }

  /*Remove certain task from list*/
  deleteTask(taskToDelete) {
    _.remove(this.state.allItems, todo => todo.task === taskToDelete);
    this.setState({ allItems: this.state.allItems });
  }
}
