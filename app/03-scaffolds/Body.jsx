import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import Userlist from '../02-modules/user-list/Userlist.jsx';
import Footer from './Footer.jsx';


class Body extends React.Component {

  render() {
		let users = "https://jsonplaceholder.typicode.com/users";

    return (
			<div>
				<Header/>
				<h3>Example list</h3>
			 	<Userlist data={users} />
			 	<Footer/>
			</div>
		)
  }
}

ReactDOM.render(<Body/>, document.getElementById('body'));
