import React                               from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import SearchForm                          from './components/SearchForm';

const Main = () => {
  return (
    <div className="mt-5 pt-5">
      <Container>
        <SearchForm/>
      </Container>
    </div>
  );
};

export default Main;