import React, { Component, PropTypes } from 'react';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import Gameboy from '../components/Gameboy';
import SetUser from '../components/SetUser';

class Body extends Component {
  render() {
    const { messages, user, actions, frame, showOptions, connected, playerCount } = this.props;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-6'>
            <Gameboy frame={frame} players={playerCount}/>
          </div>
          <div className='col-xs-6'>
            <div className='row'>
              {this.userOrInput(user, showOptions, actions, connected)}
            </div>
            <div style={{marginTop: '10px'}}>
              <MessageList user={user} messages={messages} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  userOrInput(user, showOptions, actions, connected) {
    if (user.name && !showOptions) {
      return <MessageInput user={user} onSubmit={actions.addMessage} connected={connected}/>;
    } else {
      return <SetUser user={user}
                      onNameChange={actions.changeUserName}
                      onColorChange={actions.changeUserColor} />;
    }
  }
}

Body.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  frame: PropTypes.string.isRequired
};

export default Body;
