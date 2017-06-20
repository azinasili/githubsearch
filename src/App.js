import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/search/Search';
import Profile from './components/profile/Profile';
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
      string: '',
      state: '',
      ...options
    };

    axios.get(defaults.string)
      .then((response) => {
        console.log(response.data);
        this.setState({[defaults.state]: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  searchUsers() {
    this.ajaxRequest({
      string: `https://api.github.com/users/${this.state.searchString}`,
      state: `userData`,
    });
  }

  searchRepos() {
    this.ajaxRequest({
      string: `https://api.github.com/search/repositories?q=${this.state.searchString}&sort=stars`,
      state: `repoData`,
    });
  }

  getSearchString(event) {
    this.setState({searchString: event.target.value});
  }

  getSearchResults(event) {
    event.preventDefault();
    this.searchUsers();
    this.searchRepos();
  }

  render() {
    return (
      <div className="App">
        <Search getSearchResults={this.getSearchResults} getSearchString={this.getSearchString} />
        <Profile profile={this.state.userData} />
        <Repos repos={this.state.repoData} />
      </div>
    );
  }
}

export default App;
