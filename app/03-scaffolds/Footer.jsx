import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Footer.scss'

export default class Footer extends React.Component {
  render() {
    return (
			<footer className={styles.page_footer}>
				This is the footer
			</footer>
		)
  }
}
