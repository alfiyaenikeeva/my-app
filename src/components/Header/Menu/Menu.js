import React from 'react';

import HeaderButton from '../HeaderButton/HeaderButton';

import user from "../../../assets/images/svg/user.svg";
import cart from "../../../assets/images/svg/cart.svg";
import './Menu.scss';

const Menu = ({ open }) => (
  <div
    className={open ? "header-nav open" : "header-nav"}
  >
    <HeaderButton
      img={user}
      alt="user"
      text="Sign up"
    />
    <HeaderButton
      img={cart}
      alt="cart"
      text="Cart"
      notifications={4}
    />
  </div>
);

export default Menu;
