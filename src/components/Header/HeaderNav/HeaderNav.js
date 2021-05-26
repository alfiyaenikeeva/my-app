import React, { useState } from 'react';

import Menu from '../Menu/Menu';

import './HeaderNav.scss';

const HeaderNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className={open ? "burger open" : "burger"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Menu open={open} />
    </>
  );
};

export default HeaderNav;
