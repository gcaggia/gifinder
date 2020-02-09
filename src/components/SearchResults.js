import React                        from 'react';
import {Card, Col, Pagination, Row} from 'react-bootstrap';
import GifItem                      from './GifItem';

const SearchResults = ({gifResults}) => {
  return (
    <div className={gifResults.length == 0 ? 'empty-result' : 'has-result'}>
      <Row className="mt-5 pt-4 pb-5">
        <Col md={12} className="text-left">
          <h5>Results</h5>
        </Col>
        <Col md={12}>
          <Card className="p-2">
            <Row className="text-center">
              { gifResults.map((gifResult, index) =>
                <GifItem
                  key={index.toString()}
                  urlImage={gifResult.images.downsized.url}
                />
              )
              }
            </Row>
          </Card>
        </Col>
      </Row>
      <div className="pagination-result">
        <Pagination className="justify-content-center">
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
};

export default SearchResults;