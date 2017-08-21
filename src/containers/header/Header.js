import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSearchValue, getSearchString } from '../../actions/getSearch';
import { getUsers } from '../../actions/getUsers';
import { getRepos } from '../../actions/getRepos';
import Search from '../../components/search/Search';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.searchResults = this.searchResults.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  searchResults(event) {
    event.preventDefault();

    const SEARCH_STRING = this.props.searchString;

    this.props.dispatch(getUsers(SEARCH_STRING));
    this.props.dispatch(getRepos(SEARCH_STRING));
  }

  updateSearch(string) {
    this.props.dispatch(getSearchValue(string));
    this.props.dispatch(getSearchString(string));
  }

  render() {
    return (
      <header className="Header">
        <Search
          searchValue={this.props.searchValue}
          updateSearch={this.updateSearch}
          searchResults={this.searchResults} />
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchString: state.search.string,
    searchValue: state.search.value,
  };
}

export default connect(mapStateToProps)(Header);
