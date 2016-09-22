import React from 'react';
import ReactDOM from 'react-dom';

import './hello.css';

class Hello extends React.Component {
  render() {
    return (
			<h1 className="heading-1">Hay hayy</h1>
		)
  }
}
ReactDOM.render(<Hello/>, document.getElementById('container'));
