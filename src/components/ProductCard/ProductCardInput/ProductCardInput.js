import React from "react";
import { useState } from "react";

import './ProductCardInput.scss';

const ProductCardInput = () => {
  const [count, setCount] = useState(1);

  function onMinusClick() {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  }

  function onPlusClick() {
    if (count === 3) {
      return;
    }
    setCount(count + 1);
  }

  return (
    <div className="product-card-input">
      <div
        onClick={onMinusClick}
        className="product-card-btn"
      ></div>
      <span>{count}</span>
      <div
        onClick={onPlusClick}
        className="product-card-btn"
      ></div>
    </div>
  );
};

export default ProductCardInput;
