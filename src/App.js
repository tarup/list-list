import React, { Component } from 'react';
import './App.css';
import { browserHistory } from 'react-router';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="Header-text" onClick={browserHistory.goBack}>
            List-Test
          </h2>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default App;
