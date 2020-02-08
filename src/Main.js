import React                 from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const Main = () => {
  return (
    <div className="mt-3 pt-5">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            Main app
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;