import React, { Component } from 'react';
import Select from '../select/Select.js';
import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectValue: 10,
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.users !== nextProps.users.items) {
      this.setState({users: nextProps.users.items});
    }
  }

  handleSelect(event) {
    this.setState({selectValue: event.target.value});
  }

  render() {
    let users;
    let userList;
    if (this.state.users !== undefined && this.state.users.length > 0) {
      userList = this.state.users.slice(0, this.state.selectValue);
      users = userList.map((user) => {
        return (
          <li key={user.id} className="User">
            <a href={user.html_url} className="User-link">
              <img src={user.avatar_url} alt="Github profile avatar" className="User-avatar" />
              <p className="User-name">{user.login}</p>
            </a>
          </li>
        );
      });
    }

    return (
      <div className="Users">
        <div className="Users-header">
          <h2 className="Users-title">Top {this.state.selectValue} Users</h2>
          <form className="Users-switcher">
            <Select selectValue={this.state.selectValue} handleSelect={this.handleSelect} />
          </form>
        </div>
        <ul className="User-list">{users}</ul>
      </div>
    );
  }
}

export default Users;
