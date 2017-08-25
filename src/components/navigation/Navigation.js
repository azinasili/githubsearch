import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Navigation.css';

class Navigation extends Component {
  render() {
    const CLASSES = classNames({
      'Navigation-button': true,
    });
    console.log(this.props);

    return (
      <nav className="Navigation">
        <ul className="Navigation-list">
          <li className="Navigation-listitem"><button onClick={this.props.switchUserView} className="Navigation-button">Users</button></li>
          <li className="Navigation-listitem"><button onClick={this.props.switchRepoView} className="Navigation-button">Repos</button></li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  active: PropTypes.bool,
  switchUserView: PropTypes.func,
  switchRepoView: PropTypes.func,
};

export default Navigation;
