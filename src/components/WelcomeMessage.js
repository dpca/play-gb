import React from 'react';

const WelcomeMessage = () => {
  return (
    <li className='text-center'
        key='message-welcome'
        style={{marginTop: '20px', color: '#c0c0c0'}} >
      Welcome! Use the keyboard or chat to control the game.
    </li>
  );
};

export default WelcomeMessage;
