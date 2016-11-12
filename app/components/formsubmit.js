import React from 'react';
import {postFeedback} from '../server';
// import {writeDocument, addDocument} from '../database.js';



export default class FormSub extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
  }

  handlePost(e){
    e.preventDefault();
    var statusUpdateText = this.state.value.trim();
    if(statusUpdateText !== ""){
      postFeedback(1,statusUpdateText);
      this.setState({value: ""});
    }
  }
  handleChange(e){
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  render(){
    return(
      <div>
      <textarea rows="2"
                placeholder="Write any feedback you have and click 'submit'."
                value={this.state.value}
                onChange={(e) => this.handleChange(e)}
                className="form-control general-margin contact-form"/>

        <button type="button" className="btn btn-default general-margin"
          onClick={(e) => this.handlePost(e)}>
          Submit
        </button>
        {}
      </div>
    )
  }
}
