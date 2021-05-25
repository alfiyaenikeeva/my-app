import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from '../Menu/Menu';

const StyledBurger = styled.div`
  display: none;
  position: absolute;
  top: 27px;
  right: 15px;
  width: 38px;
  height: 30px;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  z-index: 20;

  span {
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${({ open }) => open ? 'gray' : '#212542'};
    border-radius: 2px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 480px) {
    display: flex;
  }
`;

const HeaderNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <StyledBurger
        open={open}
        onClick={() => setOpen(!open)}
        className="burger-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </StyledBurger>
      <Menu open={open} />
    </React.Fragment>
  );
};

export default HeaderNav;
