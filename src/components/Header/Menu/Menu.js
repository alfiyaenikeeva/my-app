import React from 'react';

import HeaderButton from '../HeaderButton/HeaderButton';
import { connect } from "react-redux";

import user from "../../../assets/images/svg/user.svg";
import cartIcon from "../../../assets/images/svg/cart.svg";
import './Menu.scss';

const Menu = ({ open, cartsTotal }) => (
  <div
    className={open ? "header-nav open" : "header-nav"}
  >
    <HeaderButton
      img={user}
      alt="user"
      text="Sign up"
    />
    <HeaderButton
      img={cartIcon}
      alt="cart"
      text="Cart"
      notifications={cartsTotal}
    />
  </div>
);

const mapStateToProps = ({ cartsTotal }) => {
  return { cartsTotal };
};

export default connect(mapStateToProps)(Menu);
