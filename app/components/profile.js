import React from 'react';
import {Link} from 'react-router';
export default class Profile extends React.Component{
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-xs-4">
            <img src="../build/img/profile.jpeg" alt="profile image" style="width: 210px;height:210px;" />

          </div>
          <div class ="col-xs-3 main-bdy">
            <span className="category">Full Name: </span>
            <p></p>
            <span className="category">University ID: </span>
            <p></p>
            <span className="category">Major(s): </span>
            <p></p>
            <span className="category">Minor(s): </span>
            <p></p>
            <span className="category">Grad Date: </span>
            <p></p>
            <span className="category">Username: </span>
            <p></p>
            <hr />
          </div>
          <div class ="col-xs-3 main-bdy2">
            <span className="data">Sample User</span>
            <p></p>
            <span className="data">12345678</span>
            <p></p>
            <span className="data">Computer Science</span>
            <p></p>
            <span className="data">Mathematics</span>
            <p></p>
            <span className="data">May, 2018</span>
            <p></p>
            <span className="data">suser@umass.edu</span>
            <p></p>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-4">
            <div className="row sidebar-box">
              <div className="sidebar">
                  <button type="button" className="btn navbar-btn btn-default">
                    <span> Saved Graphs</span>
                  </button>
                  <br />
                  <button type="button" className="btn navbar-btn btn-default">
                    <span> Course History</span>
                  </button>
                  <br />
                  <button type="button" className="btn navbar-btn btn-default">
                    <span> About</span>
                  </button>
                  <br />
                  <button type="button" className="btn navbar-btn btn-default">
                    <span> blank</span>
                  </button>
              </div>
            </div>
          </div>
          <div className="col-xs-5">
              <div className="input-group">
                <input type="text" className="form-control fb-search" placeholder="Old Password" />
              </div>
              <br />
              <div className="input-group">
                <input type="text" className="form-control fb-search" placeholder="New Password" />
              </div>
              <br />
              <div className="input-group">
                <input type="text" className="form-control fb-search" placeholder="Confirm New Password" />
              </div>
              <br />
          <button type="button" className="btn btn-default">
            <span>Change Password</span>
          </button>
        </div>
        </div>
      </div>
    )
  }
}
