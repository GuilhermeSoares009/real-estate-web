import React from 'react';
import "../styles/SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-fields">
        <select>
          <option>Location</option>
        </select>
        <select>
          <option>Type</option>
        </select>
        <select>
          <option>Price Range</option>
        </select>
        <input type="text" placeholder="City, neighborhood" />
      </div>
      <button className="search-button">Search</button>
    </div>
  );
};