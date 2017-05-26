import React from "react";
import { Button, Panel, Modal } from 'react-bootstrap';
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
      user: props.user,
      showModal: false
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
            <li><Telephone /> { person.phone } </li>
            <li>
                <Website />
                <a href="https://wwf.fi/norppalive/"> { person.website }</a>
            </li>

            {this.renderModal()}
          </ul>
        </Panel>
      </div>
    );
  }

  renderModal() {
    const person = this.state.user;
    let close = () => this.setState({ showModal: false});

    return (
      <div className="modal-container">
        <Button bsStyle="info" style={{marginLeft:'80%'}}
                onClick={() => this.setState({ showModal: true})}>
                Contact
        </Button>

        <Modal
          show={this.state.showModal}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
          className="test"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              {person.name} - Address
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Streetname: {person.address.street}, {person.address.suite}
            <br/>
            City: {person.address.zipcode} {person.address.city}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
