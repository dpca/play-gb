import React, { PropTypes } from 'react';

const MessageName = ({user, message}) => {
  const style = { color: message.user.color };
  const name = message.user.name;
  if (message.user.uid === user.uid) {
    return <strong style={style}>{name}</strong>
  } else {
    return <span style={style}>{name}</span>
  }
}

MessageName.propTypes = {
  user: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
};

export default MessageName;
