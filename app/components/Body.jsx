import React from 'react';
import ReactDOM from 'react-dom';

class Body extends React.Component {
  render() {
    return (
			<div>
			 This is the body or the content.
			</div>
		)
  }
}

ReactDOM.render(<Body/>, document.getElementById('content'));
