import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import '../socket';
import '../keyboardListener';
import Header from '../components/Header';
import Body from '../containers/Body';
import { GAME_KEYS } from '../constants/GameKeys';

class App extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
        <Body {...this.props } />
      </div>
    );
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
    frame: state.game,
    showOptions: state.showOptions,
    connected: state.connected,
    playerCount: state.playerCount
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
