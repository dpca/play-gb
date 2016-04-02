import React from 'react';

const title = process.env.TITLE || 'Play Pokémon!';

const Header = ({user, showOptions, actions, connected}) => {
  let gearClass = 'fa fa-gear';
  if (showOptions) gearClass += ' text-danger';
  let statusClass = 'fa fa-spinner fa-spin';
  if (connected) statusClass = 'fa fa-check';
  return (
    <div>
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>{title}</a>
          </div>
          <div className='collapse navbar-collapse'>
            <ul className='nav navbar-nav navbar-right'>
              <li className='navbar-text' style={{color: user.color}}>
                {user.name}
              </li>
              <li title='User options'>
                <a onClick={actions.showOptions}>
                  <i className={gearClass}/>
                </a>
              </li>
              <li title='Toggle keys'>
                <a onClick={actions.showKeys}>
                  <i className='fa fa-keyboard-o' />
                </a>
              </li>
              <li title='Connection status'>
                <a>
                  <i className={statusClass} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
