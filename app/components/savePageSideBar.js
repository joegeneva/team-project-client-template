import React from 'react';

export default class SavePageSideBar extends React.Component {
  render() {
    return (
      <div className="col-md-2 ">

        <div className="sidebar">
          <div className="form-group form-inline">
            <label><p className="white-font">Sorted By:</p></label>
            <br />
            <select className="form-control" title="Choose one of the following...">
              <option>Saved Date</option>
              <option>Edited Date</option>
            </select>
            <button className="btn btn-default pull-right" type="button" ><span className="glyphicon glyphicon-ok"></span></button>
          </div>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search by Name" />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default">
                <span className="glyphicon glyphicon-search"></span>
              </button>
            </span>
          </div>
          <br />
        </div>
      </div>

    )
  }
}
