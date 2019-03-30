import React from 'react';

const Header = ({children}) => {
  return (
    <header className="header">
      <h2 className="header__heading">{children}</h2>
    </header>
  );
}

export default Header;