import React from "react";
import axios from "axios";
import './Userlist.css';
import { Accordion } from 'react-bootstrap';
import UserItem from './UserlistItem';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    };
    this.apiUrl = 'http://jsonplaceholder.typicode.com/users'
  }

  /*Fetch data*/
  componentDidMount() {
    axios.get(this.apiUrl)
      .then((res) => {
        this.setState({data:res.data});
        this.setState({loading: false})
      })
  }

  render() {
    if(this.state.loading) {
      return(
        <div>
          <div className="beautyBlock"/>
          <h1>Loading...</h1>
        </div>
      );
    }

    const userlist = this.state.data.map((item) =>
      <UserItem key={item.id} user={item}/>
    );

    return (
      <div>
          <div className="beautyBlock"/>
          <Accordion className="itemsAccordion">
            { userlist }
          </Accordion>
      </div>
    );
  }
}
