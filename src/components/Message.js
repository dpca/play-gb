import React, { PropTypes } from 'react';
import MessageName from './MessageName';

const Message = ({user, message}) => {
  return (
    <li>
      <div className='row' style={{marginTop: '5px'}}>
        <div className='col-xs-2'>
          <MessageName user={user} message={message} />
        </div>
        <div className='col-xs-10'>
          <span>{message.message}</span>
        </div>
      </div>
    </li>
  );
};

Message.propTypes = {
  user: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired
};

export default Message;
