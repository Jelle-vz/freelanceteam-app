import React from 'react';
import ReactDOM from 'react-dom';

import Userlist from '../modules/user-list/Userlist.jsx';


class Body extends React.Component {

  render() {
		let users = "https://jsonplaceholder.typicode.com/users";

    return (
			<div>
			 <h3>Example list</h3>
			 <Userlist data={users} />
			</div>
		)
  }
}

ReactDOM.render(<Body/>, document.getElementById('content'));
