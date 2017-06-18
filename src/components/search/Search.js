import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    }
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

  render() {
    return (
      <form onSubmit={this.searchUser} className="Search">
        <div className="Input-group">
          <p className="Input-field">
            <label className="Input-label sr-only" htmlFor="profileSearch">Profile Search</label>
            <input type="text" id="profileSearch" name="profileSearch" className="Input" placeholder="Profile Search" value={this.state.user} onChange={this.setUser}  />
          </p>
          <button className="Input-button">Search</button>
        </div>
      </form>
    );
  }
}

export default Search;
