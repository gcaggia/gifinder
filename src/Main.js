import React                               from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import SearchForm                          from './components/SearchForm';
import SearchResults                       from './components/SearchResults';

const Main = () => {
  return (
    <main className="flex-fill mt-5 pt-5">
      <Container>
        <SearchForm/>
        <SearchResults className="mt-5"/>
      </Container>
    </main>
  );
};

export default Main;