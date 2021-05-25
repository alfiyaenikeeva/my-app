import React from 'react';
import styled from 'styled-components';

import HeaderButton from '../HeaderButton/HeaderButton';

import user from "../../../assets/images/svg/user.svg";
import cart from "../../../assets/images/svg/cart.svg";

const StyledNav = styled.nav`
  display: flex;

  @media (max-width: 480px) {
    flex-flow: column nowrap;
    padding-left: 20px;
    justify-content: space-around;
    position: fixed;
    width: 50%;
    top: 92px;
    right: 0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    background: white;
    border: 1px solid #F8F8F8;
    border-radius: 0 0 0 10px;
    transition: transform 0.3s ease-in-out;
  }
`;

const Menu = ({ open }) => (
  <StyledNav
    open={open}
    className="header-nav"
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
    />
  </StyledNav>
);

export default Menu;
