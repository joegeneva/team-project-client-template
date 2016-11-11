import React from 'react';


export default class Sidebar extends React.Component{
  render(){
    return(
      <div className="main-app-settings main-app-border">

        <button type="button" className="btn navbar-btn btn-default pull-right">
          <span className="glyphicon glyphicon-arrow-left"> Settings Panel</span>
        </button>
        <br /><br />
        <hr />

        <div className="form-group form-inline">
          <label>Add a Major:</label>
          <br />
          <select className="form-control" title="Choose one of the following...">
            <option>select a major..</option>
            <option>Computer Science</option>
            <option>Philosophy</option>
            <option>Math</option>
          </select>
            <button className="btn btn-default pull-right" type="button" ><span className="glyphicon glyphicon-plus"></span></button>
        </div>
        <div className="form-group form-inline">
          <label>Add a Minor:</label>
          <br />
          <select className="form-control">
            <option>select a minor..</option>
            <option>Computer Science</option>
            <option>Philosophy</option>
            <option>Math</option>
          </select>
            <button className="btn btn-default pull-right" type="button" ><span className="glyphicon glyphicon-plus"></span></button>
        </div>

        <div className="checkbox">
          <label><input type="checkbox" />Show Gen-ED Dependencies</label>
        </div>
        <div className="checkbox">
          <label><input type="checkbox" value="" />Hide In-Elligible classNamees</label>
        </div>
      <hr />

      <div className="settings-current">
        Currently Showing: <br />
        Computer Science Major
      </div>
      <hr />

      <div className="btn-group" role="group">

        <button type="button" className="btn navbar-btn btn-default">
          <span className="glyphicon glyphicon-floppy-disk"> Save Progress</span>
        </button>
        <br />
        <button type="button" className="btn navbar-btn btn-default">
          <span className="glyphicon glyphicon-save"> Download PDF</span>
        </button>
      </div>

      </div>
    )
  }
}
