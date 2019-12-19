import React from 'react';
import '../Styles/Header.css';
import logo from '../logo.png';

function Header() {
  return (
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} alt='logo' className="App-logo" />
        </div>
        <h1>
          What is Lorem Ipsum?
        </h1>

      </header>
  );
}

export default Header;
