import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <form onSubmit={this.props.searchResults} className="Search">
        <div className="Input-group">
          <p className="Input-field">
            <label className="Input-label sr-only" htmlFor="profileSearch">Profile Search</label>
            <input
              type="text"
              id="profileSearch"
              name="profileSearch"
              className="Input"
              placeholder="Search GitHub"
              value={this.props.searchValue}
              onChange={(event) => this.props.updateSearch(event.target.value)} />
          </p>
          <input type="submit" value="Search" className="Input-button" />
        </div>
      </form>
    );
  }
}

Search.propTypes = {
  searchValue: PropTypes.string,
  updateSearch: PropTypes.func,
  searchResults: PropTypes.func,
};

export default Search;
