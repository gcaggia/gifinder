import React                                           from 'react';
import {Container} from 'react-bootstrap';
import SearchForm                                      from './components/SearchForm';
import SearchResults                                   from './components/SearchResults';

const Main = (
  {
    searchTerm,
    searchResults,
    onChangeSearchTerm,
    onSubmitSearch,
    paginationNumber,
    onChangePagination
  }) => {
  return (
    <main className="flex-fill mt-5 pt-5">
      <Container className="main-container">
        <SearchForm searchTerm={searchTerm}
                    onChangeSearchTerm={onChangeSearchTerm}
                    onSubmitSearch={onSubmitSearch}
        />
        <SearchResults gifResults={searchResults}
                       paginationNumber={paginationNumber}
                       onChangePagination={onChangePagination}
                       className="mt-5"
        />
      </Container>
    </main>
  );
};

export default Main;