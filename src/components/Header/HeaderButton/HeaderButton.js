import React from "react";

import './HeaderButton.scss';

const HeaderButton = ({ img, alt, text }) => (
  <button className="button">
    <img src={img} alt={alt} />
    <span>{text}</span>
  </button>
);

export default HeaderButton;
