import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';
import _ from 'lodash';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';
import Gameboy from '../components/Gameboy';
import SetUser from '../components/SetUser';

class App extends Component {
  render() {
    const { messages, user, actions, frame } = this.props
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <Gameboy frame={frame}/>
          </div>
          <div className='col-sm-6'>
            {this.userOrInput()}
            <MessageList messages={messages} />
          </div>
        </div>
      </div>
    );
  }

  userOrInput() {
    const { user, actions } = this.props;
    if (user.name == '') {
      return (
        <SetUser onSubmit={actions.changeUser}/>
      )
    } else {
      return (
        <MessageInput user={user} onSubmit={actions.addMessage}/>
      )
    }
  }
}

App.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  frame: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user,
    messages: state.messages,
    frame: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
