import React from "react";
import { Button, Panel, Modal, Image } from 'react-bootstrap';
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
            <li className="Username">{ person.username }
              <Image className="personImage"
                     src={require('./../../seal_thumb.jpeg')}
                     responsive
                     thumbnail
                     alt="person"
              />
            </li>
            <br/><br/><br/>
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

  /*Testing Modal component. Includes person address.*/
  renderModal() {
    const person = this.state.user;
    let close = () => this.setState({ showModal: false});

    return (
      <div className="modal-container">
        <Button bsStyle={null}
                className="contactperson"
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
            <span className="AddressInfo">Streetname: </span>
              {person.address.street}, {person.address.suite}
            <br/>
            <span className="AddressInfo">City: </span>
              {person.address.zipcode} {person.address.city}
            <br/><br/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
