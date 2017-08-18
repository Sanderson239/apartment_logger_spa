import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
