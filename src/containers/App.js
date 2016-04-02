import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import '../socket';
import '../keyboardListener';
import Header from '../components/Header';
import Body from '../containers/Body';
import Footer from '../containers/Footer';
import { GAME_KEYS } from '../constants/GameKeys';

const bottomMargin = '150px';
const containerStyle = { marginBottom: bottomMargin };
const footerStyle = { position: 'absolute', bottom: 0, width: '100%', height: bottomMargin};

class App extends Component {
  renderFooterIfMobile() {
    if (this.props.showKeys) {
      return (
        <Footer footerStyle={footerStyle}
          user={this.props.user}
          actions={this.props.actions}
          connected={this.props.connected} />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div style={containerStyle}>
        <Header user={this.props.user}
                showOptions={this.props.showOptions}
                actions={this.props.actions}
                connected={this.props.connected} />
        <Body {...this.props } />
        { this.renderFooterIfMobile() }
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
    playerCount: state.playerCount,
    showKeys: state.showKeys
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
