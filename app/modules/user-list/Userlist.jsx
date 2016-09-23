import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

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

export default class Userlist extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data : []
		};
		
		request(this, this.props.data, 'json');

	}

	componentWillUnmount() {
		request().abort();
	}

	render(){
		let data = this.state.data;
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
