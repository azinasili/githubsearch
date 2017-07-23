import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../../components/search/Search.js';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <Search
          searchString={this.props.searchString}
          getSearchString={this.props.getSearchString}
          getSearchResults={this.props.getSearchResults} />
      </header>
    );
  }
}

Header.propTypes = {
  searchString: PropTypes.string,
  getSearchString: PropTypes.func,
  getSearchResults: PropTypes.func,
};

export default Header;
