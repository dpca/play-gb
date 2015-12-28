import React, { Component, PropTypes } from 'react';

class MessageInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleKeyDown(e) {
    if (e.which === 13) {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    const user = this.props.user;
    const text = this.state.text.trim();
    if (text && user.name) {
      this.setState({text: ''});
      this.props.onSubmit(user, text);
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Type a message'
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)} />
        <span className='input-group-btn'>
          <button className='btn btn-primary' type='button' onClick={this.handleSubmit.bind(this)}>
            Send
          </button>
        </span>
      </div>
    )
  }
}

MessageInput.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default MessageInput;
