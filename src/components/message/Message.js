import React, { Component } from 'react';
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

export default Message;
