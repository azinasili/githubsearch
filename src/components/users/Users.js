import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.users !== nextProps.users.items) {
      this.setState({users: nextProps.users.items});
    }
  }

  render() {
    let users = null;

    if (this.state.users !== undefined && this.state.users.length > 0) {
      let userList = this.state.users.slice(0, this.state.selectValue);
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
      <ul className="User-list">{users}</ul>
    );
  }
}

export default Users;
