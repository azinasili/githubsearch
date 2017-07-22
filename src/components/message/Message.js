import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <div className="Message">
        <p className="Message-text">{this.props.message}</p>
      </div>
    );
  }
}

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
