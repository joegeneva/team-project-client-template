import React from 'react';
import SavePageSideBar from "./savePageSideBar";
import SavePageItem from "./savePageItem";
import {getPageData} from '../server';

export default class SavePages extends React.Component {
  constructor(props){
    super(props);
    this.state = getPageData(this.props.user)
  }

  render() {
    var data = this.state.pages;
    return (
      <div className="container">
        <div className="row">
          <SavePageSideBar />

          <div className="col-md-2">
          </div>

          <div className="col-md-7 main-body">
            <div className="row bottom-space">
              {
                data.map((page,i) => {
                  return (
                    <SavePageItem key ={i}
                                  index = {i}
                                  name = {page.name}
                                  time = {page.time}>
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
