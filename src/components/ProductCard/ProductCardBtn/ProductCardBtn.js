import React from "react";

import CircularProgress from '@material-ui/core/CircularProgress';

import './ProductCardBtn.scss';

const ProductCardBtn = ({ addToCart }) => {
  const isLoading = false;
  const isAdded = false;

  const ButtonInner = () => (
    <>
      <span></span>
      <span>Add to cart</span>
    </>
  );

  const ButtonNotification = () => (
    <span className="product-card-button-msg">
      <span></span>
      <span>Added to cart</span>
    </span>
  );

  return (
    <div className="product-card-button-wrapper">
      <button
        onClick={addToCart}
        className="product-card-button"
      >
        {
          isLoading ? <CircularProgress size={20} color="inherit" /> : <ButtonInner />
        }
      </button>
      {
        isAdded ? <ButtonNotification /> : null
      }
    </div>
  );
};

export default ProductCardBtn;
