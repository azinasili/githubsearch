import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.searchUser} className="Search">
        <div className="Input-group">
          <p className="Input-field">
            <label className="Input-label sr-only" htmlFor="profileSearch">Profile Search</label>
            <input type="text" id="profileSearch" name="profileSearch" className="Input" placeholder="Profile Search" onChange={this.props.setUser}  />
          </p>
          <button className="Input-button">Search</button>
        </div>
      </form>
    );
  }
}

export default Search;
