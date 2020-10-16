import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ items, price }) => {
  return (
    <header className='navbar'>
      <Link to='/'>
        <span className='logo'>A</span>
      </Link>

      <Link to='/cart'>
        <div className='cart-group justify-content-between'>
          <span>{items} items</span>
          <span> ({price}$)</span>
          <i className='fas fa-shopping-cart'></i>
        </div>
      </Link>
    </header>
  );
};

export default Header;
