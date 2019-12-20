import React from 'react';
import '../Styles/Header.css';
import logo from '../logo.png';

function Header() {
  return (
      <header className="app-header">
        <div className="app-logo-container">
          <img src={logo} alt='logo' className="app-logo" />
        </div>
        <h1>
          What is Lorem Ipsum?
        </h1>

      </header>
  );
}

export default Header;
