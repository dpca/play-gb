import React, { Component, PropTypes } from 'react';
import { COLORS } from '../constants/colors';

class SetUser extends Component {
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
    const text = this.state.text.trim();
    this.props.onSubmit(text, _.sample(COLORS));
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
          placeholder='Set your name'
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)} />
        <span className='input-group-btn'>
          <button className='btn btn-warning' type='button' onClick={this.handleSubmit.bind(this)}>
            Set
          </button>
        </span>
      </div>
    )
  }
}

SetUser.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SetUser;
