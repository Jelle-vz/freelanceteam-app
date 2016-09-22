import React from 'react';
import ReactDOM from 'react-dom';

import './Header.scss';

class Header extends React.Component {
  render() {
    return (
			<div>
				<h1 className="heading-1">Itza workx!</h1>
				<h2 className="heading-2">This is the header</h2>
			</div>
		)
  }
}

ReactDOM.render(<Header/>, document.getElementById('header'));
