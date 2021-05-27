import React from "react";

import './BasketCard.scss';
import image from "../../../assets/images/svg/ice cream mini.svg";

// amount: 1
// id: "1"
// price: "243.00"

const BasketCard = ({ amount, price, title, image }) => (
  <div className="basket-card">
    <div className="basket-card-image">
      <img src={image} alt="product" />
    </div>

    <div className="basket-card-info">
      <p className="basket-card-title">{title}</p>
      <span className="basket-card-amount">{amount} pcs.</span>
    </div>

    <span className="basket-card-price">${price}</span>

    <div className="basket-card-btn"></div>
  </div>
);

export default BasketCard;
