import React, {useCallback}         from 'react';
import {Card, Col, Pagination, Row} from 'react-bootstrap';
import GifItem                      from './GifItem';

const SearchResults = ({gifResults, paginationNumber, onChangePagination}) => {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 180) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };

  const onClickPage = useCallback((num) => {
    if (num < 1 || num > 4 || num === paginationNumber) {
      return
    }
    scrollToTop();
    return onChangePagination(num);
  }, [onChangePagination, scrollToTop, paginationNumber]);

  return (
    <div className={gifResults.length === 0 ? 'empty-result' : 'has-result'}>
      <Row className="mt-5 pt-4 pb-5">
        <Col md={12} className="text-left">
          <h5>Page {paginationNumber} | Results</h5>
        </Col>
        <Col md={12}>
          <Card className="p-2">
            <Row className="text-center">
              { gifResults.slice((paginationNumber-1)*12, (paginationNumber)*12)
                  .map((gifResult, index) =>
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
          <Pagination.First onClick={() => onClickPage(1)} />
          <Pagination.Prev onClick={() => onClickPage(paginationNumber-1)} />
          <Pagination.Item onClick={() => onClickPage(1)} className={`${paginationNumber === 1 ? 'active':''}`}>{1}</Pagination.Item>
          <Pagination.Item onClick={() => onClickPage(2)} className={`${paginationNumber === 2 ? 'active':''}`}>{2}</Pagination.Item>
          <Pagination.Item onClick={() => onClickPage(3)} className={`${paginationNumber === 3 ? 'active':''}`}>{3}</Pagination.Item>
          <Pagination.Item onClick={() => onClickPage(4)} className={`${paginationNumber === 4 ? 'active':''}`}>{4}</Pagination.Item>
          <Pagination.Next onClick={() => onClickPage(paginationNumber+1)} />
          <Pagination.Last onClick={() => onClickPage(4)} />
        </Pagination>
      </div>
    </div>
  );
};

export default SearchResults;