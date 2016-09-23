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

export default class Users extends React.Component {
	render(){
		var data = this.props.data;
		return(
			<ul>
				{data.map(function(item){
					return (
						<li>{item.username} </li>
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
		let users = state.data;

    return (
			<div>
			 <h3>Example list</h3>
			 {users ? <Users data={users} /> : <span> Loading... </span>}
			 <br/>
			 <Button>Added Bootstrap support</Button>
			</div>
		)
  }
}

ReactDOM.render(<Body xhr="https://jsonplaceholder.typicode.com/users"/>, document.getElementById('content'));
