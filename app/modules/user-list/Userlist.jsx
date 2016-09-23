import React from 'react';
import ReactDOM from 'react-dom';

function fetchJson(url, type, scope) {
	fetch(url).then(function(response) {
			response.json().then(function(myJson) {
				scope.setState({data: myJson});
			})
	}).catch(function(err) {
		console.log('error');
	});
}

export default class Userlist extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data : []
		};

		fetchJson(this.props.data, 'json', this);

	}

	componentWillUnmount() {
		fetchJson().abort();
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
