import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="Navigation">
        <ul className="Navigation-list">
          <li className="Navigation-listitem">Users</li>
          <li className="Navigation-listitem">Repos</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
