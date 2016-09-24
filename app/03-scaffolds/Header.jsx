import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Header.scss';

class Header extends React.Component {
  render() {
    return (
			<div>
				<h1 className={styles.heading_one}>Itza workx!</h1>
			</div>
		)
  }
}

ReactDOM.render(<Header/>, document.getElementById('header'));