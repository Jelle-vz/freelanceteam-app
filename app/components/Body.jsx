import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
// import { request } from 'wvz-http-request';

import { Button } from 'react-bootstrap';


function request(scope, url, type) {
	$.ajax({
		 url: url,
		 dataType: type,
		 cache: false,
		 success: function(data) {
			 scope.setState({data: data});
		 }.bind(this),
		 error: function(xhr, status, err) {
			 console.error(url, status, err.toString());
		 }.bind(this)
	 });
}

export default class Jobs extends React.Component {
	render(){
		var jobs = this.props.data;
		return(
			<ul>
				{jobs.map(function(item){
					return (
						<li>{item.title} </li>
					)
				})}
			</ul>
		)
	}
}

class Body extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data : []
		};
		request(this, this.props.xhr, 'json');

	}

	componentWillUnmount() {
		request().abort();
	}

  render() {
		let { state, props } = this;
		let jobs = state.data.jobs;

    return (
			<div>
			 This is the body or the content.<br/>
			 {jobs ? <Jobs data={jobs} /> : <span> Loading... </span>}
			 <Button>Added Bootstrap support</Button>
			</div>
		)
  }
}

ReactDOM.render(<Body xhr="http://codepen.io/jobs.json"/>, document.getElementById('content'));
