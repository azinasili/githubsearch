import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

function Message(props) {
  return (
    <div className="Message">
      <p className="Message-text">{props.message}</p>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
