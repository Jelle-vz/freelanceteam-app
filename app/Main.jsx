import React from 'react';
import ReactDOM from 'react-dom';

import Header from './03-scaffolds/Header.jsx';
import Userlist from './02-modules/user-list/Userlist.jsx';
import Footer from './03-scaffolds/Footer.jsx';


class Main extends React.Component {

  render() {
		let users = "https://jsonplaceholder.typicode.com/users";

    return (
			<div>
				<Header/>
			 	<Userlist data={users} />
			 	<Footer/>
			</div>
		)
  }
}

ReactDOM.render(<Main/>, document.getElementById('main'));
