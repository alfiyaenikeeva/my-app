import React from 'react';

import HeaderNav from './HeaderNav/HeaderNav';

import './Header.scss';
import logo from '../../assets/images/svg/logo.svg';

const Header = ({ cart }) => (
  <div className="header">
    <div className="container">
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
      <HeaderNav cart={cart} />
    </div>
  </div>
);

export default Header;
