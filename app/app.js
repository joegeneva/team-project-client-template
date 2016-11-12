import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import {AboutPage} from './components/about'; //this statement crashes everything? so about component is big block of code for now
import {Router, Route, browserHistory} from 'react-router';
// import FormSubmit from './components/formsubmit';


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
      <p>yo</p>
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
      <Route path="/home" component={About} />
      <Route path="/about" component={About} />
      <Route path="/savepage" component={SavePage} />
      <Route path="/coursehistory" component={CourseHistory} />
    </Route>
  </Router>
),document.getElementById('app'));
