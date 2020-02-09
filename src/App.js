import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main   from './Main';
import Footer from './Footer';

class App extends Component {

  constructor(props) {
    super(props);
    // State of our app
    this.state = {
      searchTerm: '',
      searchResults: [],
      paginationNumber: 1
    };
    // This binding is necessary to make `this` work in the callback
    this.handleChangeSearchTerm = this.handleChangeSearchTerm.bind(this);
    this.handleSubmitSearch     = this.handleSubmitSearch.bind(this);
    this.handleChangePagination = this.handleChangePagination.bind(this);
  }

  handleChangeSearchTerm(term) {
    this.setState({
      searchTerm: term,
      paginationNumber: 1
    });
  }

  handleSubmitSearch(e) {
    e.preventDefault();
    const key = 'zgfvh4Rh2mJ3C3HEaIsgkfkTiPC5AoMy';
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${this.state.searchTerm}&limit=48&offset=0&rating=G&lang=en`)
      .then((response) => {
        return response.json();
      })
      .then((JsonResults) => {
        this.setState({
          searchResults: JsonResults.data,
          paginationNumber: 1
        });
      });
  }

  handleChangePagination(num) {
    this.setState({
      paginationNumber: num
    });
  }

  render() {
    return (
      <div className="d-flex flex-column sticky-footer-wrapper">
        <Header/>
        <Main
          searchTerm={this.state.searchTerm}
          searchResults={this.state.searchResults}
          onChangeSearchTerm={this.handleChangeSearchTerm}
          onSubmitSearch={this.handleSubmitSearch}
          paginationNumber={this.state.paginationNumber}
          onChangePagination={this.handleChangePagination}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;