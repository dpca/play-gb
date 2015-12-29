import React, { Component, PropTypes } from 'react';
import ColorPicker from 'react-color';

class SetUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.user.name || '',
      color: this.props.user.color || '#263238'
    };
  }

  handleKeyDown(e) {
    if (e.which === 13) {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    const text = this.state.text.trim();
    if (text) this.props.onNameChange(text);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleColorPick(color) {
    const colorHex = '#' + color.hex;
    this.setState({ color: colorHex });
    this.props.onColorChange(colorHex);
  }

  render() {
    return (
      <div>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Set your name and color'
            value={this.state.text}
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)} />
          <span className='input-group-btn'>
            <button className='btn btn-warning' type='button' onClick={this.handleSubmit.bind(this)}>
              Set
            </button>
          </span>
        </div>
        <div className='center-block' style={{marginTop: '20px'}}>
          <ColorPicker type='swatches'
                       color={this.state.color}
                       onChangeComplete={this.handleColorPick.bind(this)} />
        </div>
      </div>
    );
  }
}

SetUser.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onColorChange: PropTypes.func.isRequired
};

export default SetUser;
