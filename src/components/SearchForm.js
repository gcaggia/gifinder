import React                    from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';

const SearchForm = ({searchTerm, onChangeSearchTerm}) => {
  return (
    <Row>
      <Col md={{ span: 9, offset: 2 }}>
        <Form>
          <Form.Row>
            <Col xs={9} sm={{ span: 6, offset: 2 }} >
              <Form.Control
                size="lg"
                placeholder="Search your favourite GIF"
                value={searchTerm}
                onChange={(e) => onChangeSearchTerm(e.target.value)}
              />
            </Col>
            <Col xs={2} sm={2}>
              <Button
                size="lg"
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchForm;