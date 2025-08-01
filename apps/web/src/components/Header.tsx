import React from 'react';
import "../styles/Header.css";

export const Header = () => {
  return (
    <header className="header">
      <h1>EstateHub</h1>
      <nav>
        <ul>
          <li><a href="#">Buy</a></li>
          <li><a href="#">Rent</a></li>
          <li><a href="#">Sell</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Sign In</a></li>
        </ul>
      </nav>
      <button className="cta-button">Get Started</button>
    </header>
  );
};