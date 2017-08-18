import React, { Component } from 'react';



class Header extends Component {


render() {
    return (
      <header>
      <div class="apartment-logger">
        <h1 class="home-header">Apartment Logger</h1>
      </div>
      <div class="nav-bar">
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
