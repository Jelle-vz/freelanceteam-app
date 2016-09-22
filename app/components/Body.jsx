import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'react-bootstrap';

class Body extends React.Component {
  render() {
    return (
			<div>
			 This is the body or the content.<br/>
			 <Button>Added Bootstrap support</Button>
			</div>
		)
  }
}

ReactDOM.render(<Body/>, document.getElementById('content'));
