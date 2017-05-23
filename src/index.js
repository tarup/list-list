import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Todolist from './components/todo-page/TodoApp';
import Userlist from './components/user-page/Userlist';
import Home from './components/Home';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>

        <Route path="/todolist" component={Todolist}/>
        <Route path="/users" component={Userlist}/>
      </Route>
    </Router>
  ),document.getElementById('root')
);
