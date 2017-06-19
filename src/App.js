import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/search/Search';
import Profile from './components/profile/Profile';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchString: '',
      userData: [],
    };
    this.getSearchResults = this.getSearchResults.bind(this);
    this.getSearchString = this.getSearchString.bind(this);
    this.searchUsers = this.searchUsers.bind(this);
  }

  searchUsers() {
    axios.get(`https://api.github.com/users/${this.state.searchString}`)
      .then((response) => {
        console.log(response.data);
        this.setState({userData: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getSearchString(event) {
    this.setState({searchString: event.target.value});
  }

  getSearchResults(event) {
    event.preventDefault();
    this.searchUsers();
  }

  render() {
    return (
      <div className="App">
        <Search getSearchResults={this.getSearchResults} getSearchString={this.getSearchString} />
        <Profile profile={this.state.userData} />
      </div>
    );
  }
}

export default App;
