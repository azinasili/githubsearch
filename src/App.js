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
    this.ajaxRequest({
      url: `https://api.github.com/search/users?q=${this.state.searchString}`,
      state: `userData`,
    });
    this.ajaxRequest({
      url: `https://api.github.com/search/repositories?q=${this.state.searchString}`,
      state: `repoData`,
    });
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
