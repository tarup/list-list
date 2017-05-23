import  _ from 'lodash';
import React from "react";
import TodosHeader from './TodosHeader';
import TodolistItem from './TodolistItem';

export default class Todos extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'allItems');

    return _.map(this.props.allItems, (todo, index) =>
        <TodolistItem key={index} {...todo} {...props}/>);
        // For each todo item returns TodolistItem
        // Spread attributes: task={todo.task} isCompleted={todo.isCompleted}
  }

  render() {
    return (
      <div>
        <table>
          <TodosHeader />
          <tbody>
              {this.renderItems()}
          </tbody>
        </table>
      </div>
    );
  }
}
