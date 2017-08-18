import React, { Component } from 'react';



class Header extends Component {


render() {
    return (
      <header>
      <div className="apartment-logger">
        <h1 className="home-header">Apartment Logger</h1>
      </div>
      <div className="nav-bar">
        <ul>
          <li><h3><a>Home</a></h3></li>
          <li><h3><a>Profile</a></h3></li>
        </ul>
      </div>
    </header>
    );
  }

}

export default Header
