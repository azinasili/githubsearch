import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/search/Search';
import Profile from './components/profile/Profile';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      userData: [],
    };
    this.searchUser = this.searchUser.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  setUser(event) {
    this.setState({user: event.target.value});
  }

  searchUser(event) {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then((response) => {
        console.log(response.data);
        this.setState({userData: response.data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Search searchUser={this.searchUser} setUser={this.setUser} />
        <Profile profile={this.state.userData} />
      </div>
    );
  }
}

export default App;
