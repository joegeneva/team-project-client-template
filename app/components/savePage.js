import React from 'react';
import SavePageSideBar from "./savePageSideBar"
import SavePageItem from "./savePageItem"

export default class SavePages extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
         <SavePageSideBar />

         <div className="col-md-2">
         </div>

        <div className="col-md-7 main-body">
          <div className="row bottom-space">

            <SavePageItem />

          </div>
        </div>
      </div>
    </div>
    )
  }
}
