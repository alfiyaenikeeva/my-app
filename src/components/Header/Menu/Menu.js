import React from 'react';

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import user from "../../../assets/images/svg/user.svg";
import cartIcon from "../../../assets/images/svg/cart.svg";
import './Menu.scss';

const Menu = ({ open, cartsTotal }) => (
  <div
    className={open ? "header-nav open" : "header-nav"}
  >
    <Link to='/' className="button">
      <img src={user} alt="user" />
      <span>Sign up</span>
    </Link>

    <Link to='/basket' className="button">
      <img src={cartIcon} alt="user" />
      {cartsTotal ? <div>{cartsTotal}</div> : null}
      <span>Cart</span>
    </Link>

  </div>
);

const mapStateToProps = ({ cartsTotal }) => {
  return { cartsTotal };
};

export default connect(mapStateToProps)(Menu);
