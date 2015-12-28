import React, { PropTypes } from 'react';

const Gameboy = ({frame}) => {
  if (frame) {
    return (
      <img
        className='img-responsive'
        style={{width: '100%'}}
        alt='game'
        src={'data:image/png;base64,' + frame} />
    )
  } else {
    return (
      <div className='text-center'>
        <i className='fa fa-refresh fa-spin fa-3x'></i>
      </div>
    )
  }
}

Gameboy.propTypes = {
  frame: PropTypes.string.isRequired
}

export default Gameboy;
