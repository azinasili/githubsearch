import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.getSearchResults} className="Search">
        <div className="Input-group">
          <p className="Input-field">
            <label className="Input-label sr-only" htmlFor="profileSearch">Profile Search</label>
            <input
              type="text"
              id="profileSearch"
              name="profileSearch"
              className="Input"
              placeholder="Search GitHub"
              onBlur={(event) => this.props.getSearchString(event.target.value)} />
          </p>
          <input type="submit" value="Search" className="Input-button" />
        </div>
      </form>
    );
  }
}

export default Search;
