import React, { PropTypes } from 'react';
import Message from './Message';
import WelcomeMessage from './WelcomeMessage';

const MessageList = ({user, messages}) => {
  return (
    <ul style={{maxHeight: '500px', overflowX: 'hidden', overflowY: 'scroll'}}
        className='list-unstyled' >
      {
        messages.map((message, idx) => {
          return <Message key={'message-' + idx} user={user} message={message} />;
        })
      }
      <WelcomeMessage />
    </ul>
  );
};

MessageList.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired
};

export default MessageList;
