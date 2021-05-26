import React from "react";

import './HeaderButton.scss';

const HeaderButton = ({ img, alt, text, notifications }) => (
  <button className="button">
    <img src={img} alt={alt} />
    {notifications ? <div>{notifications}</div> : null}
    <span>{text}</span>
  </button>
);

export default HeaderButton;
