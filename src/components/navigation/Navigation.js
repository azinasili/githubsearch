import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Navigation.css';

function Navigation(props) {
  const LINKS = props.links.map((link) => {
    const CLASSES = classNames({
      'Navigation-button': true,
      'Navigation-button--active': link.selected,
    });

    return (
      <li key={link.id} className="Navigation-listitem">
        <button
          onClick={() => props.switchView(link.id)}
          className={CLASSES}>{link.title}</button>
      </li>
    );
  });

  return (
    <nav className="Navigation">
      <ul className="Navigation-list">
        {LINKS}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  links: PropTypes.array,
  switchView: PropTypes.func,
};

export default Navigation;
