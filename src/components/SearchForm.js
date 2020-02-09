import React                    from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa'

const SearchForm = ({searchTerm, onChangeSearchTerm, onSubmitSearch}) => {
  return (
    <Row>
      <Col xs={12} sm={{ span: 9, offset: 2 }}>
        <Row className="logo-row">
          <Col xs={{ span: 9, offset: 1 }} className="logo-col text-center">
            <IconContext.Provider value={{ color: "#d1d8e0", size: "55px" }}>
              <FaSearch className="logo-icon" />
            </IconContext.Provider>
            <h1 className="logo-text">
              <span className="logo-letter-g" >G</span>
              <span className="logo-letter-i1">I</span>
              <span className="logo-letter-f" >F</span>
              <span className="logo-letter-i2">i</span>
              <span className="logo-letter-n" >n</span>
              <span className="logo-letter-d" >d</span>
              <span className="logo-letter-e" >e</span>
              <span className="logo-letter-r" >r</span>
            </h1>
          </Col>
        </Row>
        <Form>
          <Form.Row>
            <Col xs={{ span: 6, offset: 2 }} >
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
                onClick={(e) => onSubmitSearch(e)}
              >
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SearchForm;