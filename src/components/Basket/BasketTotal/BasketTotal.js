import React from "react";

import './BasketTotal.scss';

const BasketTotal = ({ total, onCheckoutClick }) => (
  <div className="basket-total">
    <div className="basket-total-flex">
      <p className="basket-total-title">Sub total: </p>
      <span className="basket-total-price">${total}</span>
    </div>

    <button
      onClick={onCheckoutClick}
      className="basket-total-btn"
    >
      Check out
    </button>
  </div>
);

export default BasketTotal;
