import React from "react";

import './ProductCardBtn.scss';

const ProductCardBtn = ({ addToCart }) => (
  <button
    onClick={addToCart}
    className="product-card-button"
  >
    <span></span>
    <span>Add to cart</span>
  </button>
);

export default ProductCardBtn;
