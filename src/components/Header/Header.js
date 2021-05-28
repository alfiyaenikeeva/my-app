import React from 'react';

import HeaderNav from './HeaderNav/HeaderNav';
import { Link } from "react-router-dom";

import './Header.scss';
import logo from '../../assets/images/svg/logo.svg';

const Header = ({ cart }) => (
  <div className="header">
    <div className="container">
      <Link className="header-logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <HeaderNav cart={cart} />
    </div>
  </div>
);

export default Header;
