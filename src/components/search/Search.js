import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <div className="Input-group">
          <p className="Input-field">
            <label className="Input-label sr-only" htmlFor="profileSearch">Profile Search</label>
            <input id="profileSearch" type="text" className="Input" placeholder="Profile Search" />
          </p>
          <button className="Input-button">Search</button>
        </div>
      </div>
    );
  }
}

export default Search;
