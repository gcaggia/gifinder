import React from 'react';
import {Col} from 'react-bootstrap';

const GifItem = () => {
  return (
    <Col md={3}>
      <img src="https://via.placeholder.com/150"
           alt="#"
           className="card-img p-2"
      />
    </Col>
  );
};

export default GifItem;