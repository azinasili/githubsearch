import React from 'react';
import { connect } from 'react-redux';
import './Users.css';

function mapStateToProps(state) {
  return {
    users: state.users.items,
    usersResultLength: state.searchResultLength.users,
  };
}

function Users(props) {
  let users = null;

  if (props.users !== undefined && props.users.length > 0) {
    let userList = props.users.slice(0, props.usersResultLength);
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

export default connect(mapStateToProps)(Users);
