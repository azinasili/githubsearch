import React, { Component } from 'react';
import axios from 'axios';
import Search from './components/search/Search';
import Profile from './components/profile/Profile';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getUser = this.getUser.bind(this);
    this.searchUser = this.searchUser.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  searchUser(event) {
    event.preventDefault();
    console.log(this.state);
  }

  setUser(event) {
    this.setState({user: event.target.value});
  }

  getUser() {
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then((response) => {
        console.log(response.data);
        this.setState({login: response.data.login});
        this.setState({avatar: response.data.avatar_url});
        this.setState({name: response.data.name});
        this.setState({company: response.data.company});
        this.setState({location: response.data.location});
        this.setState({bio: response.data.bio});
        this.setState({publicRepos: response.data.public_repos});
        this.setState({publicGists: response.data.public_gists});
        this.setState({followers: response.data.followers});
        this.setState({following: response.data.following});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Search searchUser={this.searchUser} setUser={this.setUser} />
        <button onClick={this.getUser}>get profile</button>
        <Profile profile={this.state} />
      </div>
    );
  }
}

export default App;
