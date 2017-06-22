import React, { Component } from 'react';
import './Users.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      returnLength: 10,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.users !== nextProps.users.items) {
      this.setState({users: nextProps.users.items});
    }
  }

  render() {
    let users;
    let userList;
    if (this.state.users !== undefined && this.state.users.length > 0) {
      userList = this.state.users.splice(0, this.state.returnLength);
      users = userList.map((user) => {
        return (
          <li key={user.id} className="User">
            <img src={user.avatar_url} alt="Github profile avatar" className="User-avatar" />
            <p className="User-name">{user.login}</p>
          </li>
        );
      });
    }

    return (
      <div className="Users">
        <h2 className="Users-title">Top {returnLength} Users</h2>
        <ul className="User-list">{users}</ul>
      </div>
    );
  }
}

export default Users;
