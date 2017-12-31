import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Users.css';

function mapStateToProps(state) {
  return {
    users: state.users.items,
    usersResultLength: state.searchResultLength.users,
  };
}

class Users extends Component {
  render() {
    let users = null;

    if (this.props.users !== undefined && this.props.users.length > 0) {
      let userList = this.props.users.slice(0, this.props.usersResultLength);
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

export default connect(mapStateToProps)(Users);
