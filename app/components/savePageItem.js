import React from 'react';


export default class SavePageItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="row panel-body box-line">
        <button className="btn btn-default pull-left">{this.props.name}</button>
        <a className="pull-right">{this.props.time}</a>
        <br />
        <hr className="black" />
      </div>
    )
  }
}
