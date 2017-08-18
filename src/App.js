import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profiles from './components/Profiles/Profiles';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profiles />
        <Footer />
      </div>
    );
  }
}

export default App;
