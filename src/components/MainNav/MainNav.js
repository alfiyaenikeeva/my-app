import React from "react";

import { Link } from "react-router-dom";

import './MainNav.scss';

const MainNav = ({ text }) => (
  <div className="main-nav">
    <div className="container">
      <Link to="/">Main page</Link>
      <span> / </span>
      <span>{ text }</span>
    </div>
  </div>
)

export default MainNav;
