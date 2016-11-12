import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar'
import {Router, Route, browserHistory } from 'react-router'

class Home extends React.Component {
  render() {
    return (
      <p>This is the home page.</p>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <p>This is the about page.</p>
    );
  }
}

class SavePage extends React.Component {
  render() {
    return (
      <p>This is the save page page.</p>
    );
  }
}

class CourseHistory extends React.Component {
  render() {
    return (
      <p>This is the course history page.</p>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div><Navbar/>
      {this.props.children}</div>
    )
  }
}


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/savepage" component={SavePage} />
      <Route path="/coursehistory" component={CourseHistory} />
    </Route>
  </Router>
),document.getElementById('app'));
