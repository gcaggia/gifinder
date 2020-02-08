import React  from 'react';
import './App.css';
import Header from './Header';
import Main   from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
