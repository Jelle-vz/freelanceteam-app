import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase';
import Rebase from 're-base';

var db = Rebase.createClass({
	apiKey: "AIzaSyBnOkR_vwz2hPxVaNdhaHdsHJ8tQH6S1DE",
	authDomain: "dev-teamapp.firebaseapp.com",
	databaseURL: "https://dev-teamapp.firebaseio.com",
	storageBucket: "dev-teamapp.appspot.com",
	messagingSenderId: "1011905510855"
});

import Header from './03-scaffolds/Header.jsx';
import Userlist from './02-modules/user-list/Userlist.jsx';
import Footer from './03-scaffolds/Footer.jsx';


class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount(){
		//https://github.com/tylermcginnis/re-base
		db.fetch('data', {
	    context: this,
	    asArray: true,
	    then(data){
				this.state = {
					data: data
				}
				console.log(this.state)
	    }
	  });
	}

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
