import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar'
import {Link,Router, Route, browserHistory } from 'react-router'
import SavePages from './components/savePage'
import Sidebar from './components/sidebar'
import AboutPage from './components/about';


class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-3" id="side-bar">
            <Sidebar />
            </div>
            <div className="col-md-9 main-app-canvas">
              <img src="../img/main_mock_1.png" className="img-responsive"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <AboutPage />
    );
  }
}

class SavePage extends React.Component {
  render() {
    return (
      <SavePages />
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
class Settings extends React.Component {
  render() {
    return (
<div className="container">
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-2 acct-sidebar">
      <button type="button" className="btn navbar-btn btn-default pull-right">
        <span className="glyphicon glyphicon-arrow-left"> Settings Panel</span>
      </button>
      <br /><br />
      <hr />
      <div className="row">
        <div className="col-md-7">
          <button type="button" className="btn navbar-btn btn-default pull-left btn-block">
            <span>Account</span>
          </button>
          <br />
          <button type="button" className="btn navbar-btn btn-default pull-left btn-block">
            <span>Preferences</span>
          </button>
          <hr />
          <Link to={"/about"}>
        <button type="button" className="btn navbar-btn btn-default pull-left btn-block">
          <span>FAQ</span>
        </button>
          </Link>
          <hr />
          <button type="button" className="btn navbar-btn btn-default pull-left btn-block">
            <span>Apply Changes</span>
          </button>
          <hr />
          <button type="button" className="btn navbar-btn btn-default pull-left btn-block">
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>

    <div className="col-md-6 acct-body">
      <div className="row">
        <div className="col-md-12">
        <span className="bdy-hdr">Preferences</span>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
      <span className="bdy-hdr-sub">On Startup</span>
      <div className="checkbox">
        <label><input type="checkbox" />Open Online Tracking Tool</label>
      </div>
      <div className="checkbox">
        <label><input type="checkbox" />Open Settings</label>
      </div>
      <div className="checkbox">
        <label><input type="checkbox" />Open Course History</label>
      </div>
      <hr />
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <span className="bdy-hdr-sub">Font Size</span>
      <div className="checkbox">
        <label><input type="checkbox" />Small</label>
      </div>
      <div className="checkbox">
        <label><input type="checkbox" />Standard</label>
      </div>
      <div className="checkbox">
        <label><input type="checkbox" />Large</label>
      </div>
      <hr />
    </div>
  </div>
  <div className="row">
    <div className="col-md-12">
      <span className="bdy-hdr-sub">Themes</span>
      <div className="checkbox">
        <label><input type="checkbox" />Standard</label>
      </div>
      <div className="checkbox">
        <label><input type="checkbox" />Dark</label>
      </div>
      <div className="checkbox">
        <label><input type="checkbox" />Greyscale</label>
      </div>
    </div>
  </div>
</div>
</div>
</div>


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
      <Route path="/settings" component={Settings} />
    </Route>
  </Router>
),document.getElementById('app'));
