import React from 'react';
import { connect } from 'react-redux';
import { getSearchValue, getSearchString } from '../../actions/getSearch';
import getUsers from '../../actions/getUsers';
import getRepos from '../../actions/getRepos';
import Search from '../../components/search/Search';
import './Header.css';

function mapStateToProps(state) {
  return {
    searchString: state.search.string,
    searchValue: state.search.value,
  };
}

function Header(props) {
  const searchResults = (event) => {
    event.preventDefault();

    const SEARCH_STRING = props.searchString;

    props.dispatch(getUsers(SEARCH_STRING));
    props.dispatch(getRepos(SEARCH_STRING));
  }

  const updateSearch = (string) => {
    props.dispatch(getSearchValue(string));
    props.dispatch(getSearchString(string));
  }

  return (
    <header className="Header">
      <Search
        searchValue={props.searchValue}
        updateSearch={updateSearch}
        searchResults={searchResults} />
    </header>
  );
}

export default connect(mapStateToProps)(Header);
