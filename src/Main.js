import React                               from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import SearchForm                          from './components/SearchForm';
import SearchResults                       from './components/SearchResults';

const Main = ({searchTerm, searchResults, onChangeSearchTerm, onSubmitSearch}) => {
  return (
    <main className="flex-fill mt-5 pt-5">
      <Container>
        <SearchForm searchTerm={searchTerm}
                    onChangeSearchTerm={onChangeSearchTerm}
                    onSubmitSearch={onSubmitSearch}
        />
        <SearchResults gifResults={searchResults} className="mt-5"/>
      </Container>
    </main>
  );
};

export default Main;