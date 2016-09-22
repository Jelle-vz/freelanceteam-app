import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import { Button } from 'react-bootstrap';


export default class Jobs extends React.Component {
	render(){
		return(
			<span>spannetje</span>
		)
	}
}

class Body extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data:[]
		};
	}

	componentDidMount() {
		$.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
	}


  render() {
		console.log(this.state)
    return (
			<div>
			 This is the body or the content.<br/>
			 <Button>Added Bootstrap support</Button>
			 <Jobs data={this.state.data} />
			</div>
		)
  }
}

ReactDOM.render(<Body url="http://codepen.io/jobs.json"/>, document.getElementById('content'));
