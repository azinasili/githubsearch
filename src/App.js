import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/search/Search';
import Users from './components/users/Users';
import Repos from './components/repos/Repos';
import Message from './components/message/Message';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
      userData: [],
      repoData: [],
      message: 'Use the search bar to find users and repositories on GitHub 😉',
    };
    this.ajaxRequest = this.ajaxRequest.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
    this.getSearchString = this.getSearchString.bind(this);
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

  getSearchString(input) {
    this.setState({searchString: input});
  }

  getSearchResults(event) {
    event.preventDefault();
    const SEARCH_STRING = this.state.searchString.replace(/\s/g,'');

    this.ajaxRequest({
      url: `https://api.github.com/search/users?q=${SEARCH_STRING}`,
      state: `userData`,
    });
    this.ajaxRequest({
      url: `https://api.github.com/search/repositories?q=${SEARCH_STRING}`,
      state: `repoData`,
    });
    this.setState({searchString: ''});
  }

  render() {
    let users;
    let repos;
    let message;
    if (Object.keys(this.state.userData).length > 0) {
      users = <Users users={this.state.userData} />;
    }

    if (Object.keys(this.state.repoData).length > 0) {
      repos = <Repos repos={this.state.repoData} />;
    }

    if (!users && !repos) {
      message = <Message message={this.state.message} />
    }

    return (
      <div className="App">
        <Search
          searchString={this.state.searchString}
          getSearchString={this.getSearchString}
          getSearchResults={this.getSearchResults} />
        {message}
        {users}
        {repos}
      </div>
    );
  }
}

export default App;
