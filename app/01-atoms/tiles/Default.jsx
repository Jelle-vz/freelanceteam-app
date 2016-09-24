import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Default.scss';

import { Col, Thumbnail } from 'react-bootstrap';

export default class Tile extends React.Component {
  render() {
    let data = this.props.data;
    return (
      <Col xs={12} sm={4} md={3} className={styles.user_tile}>
        <Thumbnail src="http://placehold.it/350x200" alt="242x200" className="Whooptydoo">
          <h3>{data.name}</h3>
          <p>{data.company.catchPhrase}</p>
          <a href={`mailto:${data.email}`}>{data.email}</a><br/>
          <a href={`tel:${data.phone}`}>{data.phone}</a>
      </Thumbnail>
      </Col>
		)
  }
}
