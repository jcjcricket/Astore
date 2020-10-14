import React from 'react';

import './header.css';

const Header = ({ items, price }) => {
  return (
    <header className='navbar'>
      <span className='logo'>A</span>
      <div className='cart-group justify-content-between'>
        <span>{items} items</span>
        <span> ({price}$)</span>
        <a>
          <i className='fas fa-shopping-cart'></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
