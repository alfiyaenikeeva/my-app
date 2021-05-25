import React from 'react';

import './Footer.scss';
import logo from "../../assets/images/svg/logo.svg";

const Footer = () => (
  <React.Fragment>
    <div className="footer-top">
      <div className="container">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="footer-nav">
          <a href="#">Our Products</a>
          <a href="#">Privacy Terms</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Email</a>
        </nav>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        © 2021 Justice-team. All rights reserved.
      </div>
    </div>
  </React.Fragment>
);

export default Footer;
