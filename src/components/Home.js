import React from "react";
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

export default class Home extends React.Component {
  todoPressed() {
    browserHistory.push('/todolist')
  }

  usersPressed() {
    browserHistory.push('/users')
  }

  render() {
    return (
      <div>
        <div className="Categories">
          <Button bsSize="large" bsStyle={ null } className="PicButton"
                  onClick={this.todoPressed.bind(this)}>
            <img src={require('../todohamlet.png')} alt="not found"
                 width="325px"/>
          </Button>
        </div>
        <div className="Categories">
          <Button bsSize="large" bsStyle={ null } className="PicButton"
                  onClick={this.usersPressed.bind(this)}>
            <img src={require('../users.png')} alt="not found"
                 width="325px"/>
          </Button>
        </div>
      </div>
    );
  }
}
