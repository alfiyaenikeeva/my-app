import React from 'react';

import './Header.scss';
import logo from '../../assets/images/svg/logo.svg';
import user from '../../assets/images/svg/user.svg';
import cart from '../../assets/images/svg/cart.svg';

const Header = () => (
  <div className="header">
    <div className="container">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>

      <nav className="header-nav">
        <button className="button">
          <img src={user} alt="user" />
          <span>Sign up</span>
        </button>

        <button className="button">
          <img src={cart} alt="cart" />
          <span>Cart</span>
        </button>
      </nav>
    </div>
  </div>
)

export default Header;
