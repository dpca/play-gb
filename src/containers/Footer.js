import React, { Component, PropTypes } from 'react';
import Controls from '../components/Controls';

const Footer = ({footerStyle, user, actions, connected}) => {
  return (
    <div style={footerStyle}>
      <Controls  user={user} onSubmit={actions.addMessage} connected={connected} />
    </div>
  );
}

Footer.propTypes = {
  user: PropTypes.object.isRequired,
  connected: PropTypes.bool.isRequired
};

export default Footer;
