import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { COLORS } from '../constants/colors';

class MessageList extends Component {
  render() {
    return (
      <ul className='list-unstyled'>
        {this.renderMessages()}
        {this.welcomeMessage()}
      </ul>
    );
  }

  renderMessages() {
    const { messages } = this.props;
    return _.map(messages, (message, idx) => {
      return (
        <li key={'message-' + idx}>
          <div className='row' style={{marginTop: '5px'}}>
            <div className='col-xs-2'>
              <span style={{color: message.user.color}}>{message.user.name}</span>
            </div>
            <div className='col-xs-10'>
              <span>{message.message}</span>
            </div>
          </div>
        </li>
      );
    });
  }

  welcomeMessage() {
    return (
      <li className='text-center'
          key='message-welcome'
          style={{color: '#c0c0c0'}}>
        Welcome!
      </li>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}

export default MessageList;
