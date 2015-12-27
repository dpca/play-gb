import React, { Component, PropTypes } from 'react';

class Gameboy extends Component {
  render() {
    return (
      <div>
        <img
          className='img-thumbnail center-block img-responsive'
          style={{width: '100%'}}
          alt='game'
          src={'data:image/png;base64,' + this.props.frame} />
      </div>
    )
  }
}

Gameboy.propTypes = {
  frame: PropTypes.string.isRequired
}

export default Gameboy;
