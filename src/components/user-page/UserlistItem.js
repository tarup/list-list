import React from "react";
import { Button, Panel } from 'react-bootstrap';
import './Userlist.css';
/*Icons*/
import Telephone from 'react-icons/lib/fa/phone';
import Mail from 'react-icons/lib/md/mail-outline';
import Website from 'react-icons/lib/md/desktop-windows';

export default class UserItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      user: props.user
    };
  }

  render() {
    const person = this.state.user;

    return (
      <div>
        <Button className="PersonButton" bsStyle={ null }
                onClick={ ()=> this.setState({ open: !this.state.open })}>
          {person.name}
        </Button>

        <Panel className="PersonInfo" bsClass=""
               collapsible expanded={this.state.open}>
          <ul>
            <li className="Username">{ person.username }</li><br/>
            <li><Mail/> { person.email }</li>
            <li><Telephone /> { person.phone }</li>
            <li>
                <Website />
                <a href="https://wwf.fi/norppalive/">{ person.website }</a>
            </li>
          </ul>
        </Panel>
      </div>
    );
  }
}
