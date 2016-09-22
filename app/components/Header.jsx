import React from 'react';
import ReactDOM from 'react-dom';

import './Header.scss';

class Header extends React.Component {
  render() {
    return (
			<div>
				<h1 className="heading-1">Itza workx!</h1>
			</div>
		)
  }
}

ReactDOM.render(<Header/>, document.getElementById('header'));
