import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/search/Search';
import Users from './components/users/Users';
import Repos from './components/repos/Repos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
      userData: [],
      repoData: [],
    };
    this.ajaxRequest = this.ajaxRequest.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.getSearchString = this.getSearchString.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
    this.searchRepos = this.searchRepos.bind(this);
  }

  ajaxRequest(options = {}) {
    const defaults = {
      url: '',
      state: '',
      ...options
    };

    axios.get(defaults.url)
      .then((response) => {
        console.log(response.data);
        this.setState({[defaults.state]: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchUsers(searchString, dataName) {
    this.ajaxRequest({
      url: `https://api.github.com/search/users?q=${searchString}`,
      state: `${dataName}`,
    });
  }

  searchRepos(searchString, dataName) {
    this.ajaxRequest({
      url: `https://api.github.com/search/repositories?q=${searchString}&sort=stars`,
      state: `${dataName}`,
    });
  }

  getSearchString(input) {
    this.setState({searchString: input});
  }

  getSearchResults(event) {
    event.preventDefault();
    this.searchUsers(this.state.searchString, `userData`);
    this.searchRepos(this.state.searchString, `repoData`);
    this.setState({searchString: ''});
  }

  render() {
    let users;
    if (Object.keys(this.state.userData).length > 0) {
      users = <Users users={this.state.userData} />;
    }

    let repos;
    if (Object.keys(this.state.repoData).length > 0) {
      repos = <Repos repos={this.state.repoData} />;
    }

    return (
      <div className="App">
        <Search
          searchString={this.state.searchString}
          getSearchString={this.getSearchString}
          getSearchResults={this.getSearchResults} />
        {users}
        {repos}
      </div>
    );
  }
}

export default App;
