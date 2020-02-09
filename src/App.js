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
      searchResults: []
    };
    // This binding is necessary to make `this` work in the callback
    this.handleChangeSearchTerm = this.handleChangeSearchTerm.bind(this);
    this.handleSubmitSearch     = this.handleSubmitSearch.bind(this);
  }

  handleChangeSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  handleSubmitSearch(e) {
    e.preventDefault();
    console.log('handleSubmitSearch triggered! ');
    const key = 'zgfvh4Rh2mJ3C3HEaIsgkfkTiPC5AoMy';
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${this.state.searchTerm}&limit=24&offset=0&rating=G&lang=en`)
      .then((response) => {
        return response.json();
      })
      .then((JsonResults) => {
        console.log(JsonResults);
        this.setState({
          searchResults: JsonResults.data
        });
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
        />
        <Footer/>
      </div>
    );
  }
}

export default App;