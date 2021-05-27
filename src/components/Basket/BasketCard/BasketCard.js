import React from "react";

import './BasketCard.scss';
import image from "../../../assets/images/svg/ice cream mini.svg";

const BasketCard = () => (
  <div className="basket-card">
    <div className="basket-card-image">
      <img src={image} alt="product" />
    </div>

    <div className="basket-card-info">
      <p className="basket-card-title">Snow Tender Ice Cream</p>
      <span className="basket-card-amount">1 pcs.</span>
    </div>

    <span className="basket-card-price">$243.00</span>

    <div className="basket-card-btn"></div>
  </div>
);

export default BasketCard;
