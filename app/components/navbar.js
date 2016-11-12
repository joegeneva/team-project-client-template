import React from 'react';
import {Link} from 'react-router';


export default class Navbar extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-fixed-top navbar-default">
        <div className="container">
          <div className="collapse navbar-collapse">
            <div className="nav navbar-nav navbar-left">
              <div className="btn-toolbar pull-left navbar-left" role="toolbar">
                <div className="btn-group" role="group">
                  <Link to={"/"}>
                    <button type="button" className="btn navbar-btn btn-default  home-btn">
                      <span className="glyphicon glyphicon-home home-btn"></span>
                    </button>
                  </Link>
                  <Link to={"/"}>
                  <button type="button" className="btn navbar-btn btn-default">
                    <span className="glyphicon glyphicon-briefcase"></span> Main App
                  </button>
                  </Link>
                  <Link to={"/savepage"}>
                  <button type="button" className="btn navbar-btn btn-default">
                    <span className="glyphicon glyphicon-folder-open"></span> Save Pages
                  </button>
                  </Link>
                  <Link to={"/coursehistory/"}>
                  <button type="button" className="btn navbar-btn btn-default">
                    <span className="glyphicon glyphicon-check"></span>Course History
                  </button>
                </Link>
                </div>
              </div>
            </div>
            <div className="nav navbar-nav navbar-right">
              <div className="btn-toolbar pull-right" role="toolbar">
                <div className="btn-group" role="group">
                <Link to={"/Profile/"}>
                  <button type="button" className="btn navbar-btn btn-default">
                    <span className="glyphicon glyphicon-user"></span> Sample User
                  </button>
                  </Link>
                </div>
                <div className="btn-group" role="group">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn navbar-btn btn-default dropdown-toggle"
                    data-toggle="dropdown">
                    <span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu">
                  <li><Link to={"/About/"}>About</Link></li>
                  <li><a href="#">Log out...</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </nav>
    )
  }
}
