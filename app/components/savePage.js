import React from 'react';
import SavePageItem from "./savePageItem";
import {getPageData} from '../server';

export default class SavePages extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ''
    };
    this.temp = getPageData(this.props.user)
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)})
  }

  render() {
    let filteredDAta = this.temp.pages.filter(
      (page) => {
        return page.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    )
    return (
      <div className="container">
        <div className="row">
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
                <input type="text"
                      className="form-control"
                      placeholder="Search by Name"
                      value={this.state.search}
                      onChange={this.updateSearch.bind(this)}
                />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
              <br />
            </div>
          </div>
          <div className="col-md-2">
          </div>
          <div className="col-md-7 main-body">
            <div className="row bottom-space">
              {
                filteredDAta.map((page,i) => {
                  return (
                    <SavePageItem key ={i}
                                  index = {i}
                                  name = {page.name}
                                  time = {page.time}
                                  picture = {page.image}>
                            {page.contents}
                    </SavePageItem>
                  );
                })
              }
            </div>
          </div>
      </div>
    </div>
    )
  }
}
