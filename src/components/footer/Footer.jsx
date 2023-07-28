import React from 'react';
import './Footer.css';

const Header = () => {
  return (
    <div className="header">
      <p onClick={() => window.scroll(0, 0)}>
        Movie <span className="hub">Hub</span>{' '}
      </p>
    </div>
  );
};

export default Header;
