import React from "react";

import './BasketTotal.scss';

const BasketTotal = () => (
  <div className="basket-total">
    <div className="basket-total-flex">
      <p className="basket-total-title">Sub total: </p>
      <span className="basket-total-price">$3,629.00</span>
    </div>

    <button className="basket-total-btn">
      Check out
    </button>
  </div>
);

export default BasketTotal;
