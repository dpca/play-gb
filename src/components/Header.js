import React from 'react';

const title = process.env.TITLE || 'Play Pokémon!';

const Header = ({user, showOptions, actions}) => {
  let gearClass = 'fa fa-gear';
  if (showOptions) gearClass += ' text-danger';
  return (
    <div>
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='container'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>{title}</a>
          </div>
          <ul className='nav navbar-nav navbar-right'>
            <li className='navbar-text' style={{color: user.color}}>
              {user.name}
            </li>
            <li>
              <a onClick={actions.showOptions}>
                <i className={gearClass} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
