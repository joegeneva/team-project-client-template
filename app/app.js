import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar'
import {Router, Route, browserHistory } from 'react-router'
import SavePages from './components/savePage'

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
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div id="lefsid" className="about-settings">
              <button type="button" className="btn navbar-btn btn-default">
                <span> About</span>
              </button>
              <br />
              <button type="button" className="btn navbar-btn btn-default">
                <span> FAQ</span>
              </button>
              <br />
              <button type="button" className="btn navbar-btn btn-default">
                <span> Helpful Links</span>
              </button>
              <br />
              <button type="button" className="btn navbar-btn btn-default">
                <span> Contact Us</span>
              </button>
          </div>
          </div>
          <div className="col-md-9 about-canvas">
                  <h2>About</h2>
                  <p className="about-subtext">This is a web app designed by six CS326 students here at UMass in order to help you plan your future! You can easily visualize what classes you still need to take and how far away from a minor you might be. You can also achieve a nifty sense of accomplishment when you complete a class and slowly move closer to those glorious upper-level electives like Web Programming. Good luck!</p>
                  <br />
                  <p className="about-subtext">After a subtle line break, Im back to bring you a quick little tutorial of this app! Go to the main page, select which major/minor you would like to view, and take a look at the path to your favorite classes. Prerequisites are denoted by arrows. Make sure to check off the classes you have already taken so that you can easily see which ones are now open to you and which double major or minor you could complete! Check out the settings to customize your experience.</p>
                  <h2>FAQ</h2>
                    <h5 className="about-subtitle">How do I view my tracking form?</h5>
                    <p className="about-subtext">Clicking on the "Main" button in the top left will take you there!</p>
                    <h5 className="about-subtitle">Why are there no good questions in this FAQ?</h5>
                    <p className="about-subtext">Well, quite frankly, nobody has asked any questions yet! So no questions are frequently asked at this point. Maybe someday. Making this line as long as possible is also my way of testing the borders of this very same web app! I hope that answers your question, if not then please contact us below!</p>
                  <h2>Helpful Links</h2>
                    <h5 className="about-subtext"><a href="https://moodle.umass.edu/">Moodle</a></h5>
                    <h5 className="about-subtext"><a href="https://www.spire.umass.edu/">Spire</a></h5>
                    <h5 className="about-subtext"><a href="http://www.umass.edu/">UMass</a></h5>
                  <h2>Contact Us</h2>

                  <FormSubmit />

          </div>
        </div>
      </div>

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
