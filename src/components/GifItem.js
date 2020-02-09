import React from 'react';
import {Col} from 'react-bootstrap';

const GifItem = ({urlImage}) => {
  return (
    <Col md={3}>
      <img src={urlImage}
           alt="#"
           className="card-img p-2"
      />
    </Col>
  );
};

export default GifItem;