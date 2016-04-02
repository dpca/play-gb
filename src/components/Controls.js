import React, { Component, PropTypes } from 'react';

const primaryFontSize = 30;
const startSelectFontSize = 20;
const buttonStyle = { textAlign: 'center', width: '100%', color: 'white' };
const numpadStyle = { width: 40, height: 40, backgroundColor: 'black' };
const circleBackground = { backgroundColor: 'black', padding: '10px', borderRadius: '10%' };

class Controls extends Component {
  handleSubmit(key) {
    return () => {
      const user = this.props.user;
      if (this.props.connected && user.name) {
        this.props.onSubmit(user, key);
      }
    };
  }

  render() {
    return (
      <div style={{fontSize: primaryFontSize, padding: '0 30px'}}>
        <table style={{float: 'left'}}>
          <tbody>
            <tr>
              <td />
              <td style={numpadStyle}>
                <i style={buttonStyle}
                   className='fa fa-arrow-up'
                   onClick={this.handleSubmit('up')} />
              </td>
              <td />
            </tr>
            <tr>
              <td style={numpadStyle}>
                <i style={buttonStyle}
                   className='fa fa-arrow-left'
                   onClick={this.handleSubmit('left')} />
              </td>
              <td style={numpadStyle} />
              <td style={numpadStyle}>
                <i style={buttonStyle}
                   className='fa fa-arrow-right'
                   onClick={this.handleSubmit('right')} />
              </td>
            </tr>
            <tr>
              <td />
              <td style={numpadStyle}>
                <i style={buttonStyle}
                   className='fa fa-arrow-down'
                   onClick={this.handleSubmit('down')} />
              </td>
              <td />
            </tr>
          </tbody>
        </table>

        <div style={{float: 'right'}}>
          <div style={{float: 'right', marginBottom: 50}}>
            <span style={circleBackground} onClick={this.handleSubmit('b')}>
              <span style={buttonStyle}>&nbsp;B&nbsp;</span>
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={circleBackground} onClick={this.handleSubmit('a')}>
              <span style={buttonStyle}>&nbsp;A&nbsp;</span>
            </span>
          </div>

          <div style={{fontSize: startSelectFontSize}}>
            <span style={circleBackground} onClick={this.handleSubmit('start')}>
              <span style={buttonStyle}>Start</span>
            </span>
            &nbsp;&nbsp;
            <span style={circleBackground} onClick={this.handleSubmit('select')}>
              <span style={buttonStyle}>Select</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Controls.propTypes = {
  user: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  connected: PropTypes.bool.isRequired
};

export default Controls;
