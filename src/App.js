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
      searchResults: {

      }
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

  handleSubmitSearch(term) {
    console.log('handleSubmitSearch triggered! ')
  }

  render() {
    return (
      <div className="d-flex flex-column sticky-footer-wrapper">
        <Header/>
        <Main
          searchTerm={this.state.searchTerm}
          onChangeSearchTerm={this.handleChangeSearchTerm}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;