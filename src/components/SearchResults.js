import React                          from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import GifItem                        from './GifItem';

const SearchResults = () => {
  return (
    <Row className="mt-5 pt-4 pb-5">
      <Col md={12} className="text-left">
        <h5>Results</h5>
      </Col>
      <Col md={12}>
        <Card className="p-2">
          <span>No result yet...</span>
          <Row className="text-center">
            <GifItem/>
            <GifItem/>
            <GifItem/>
            <GifItem/>
            <GifItem/>
            <GifItem/>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default SearchResults;