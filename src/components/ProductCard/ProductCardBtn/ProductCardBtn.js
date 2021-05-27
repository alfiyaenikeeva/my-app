import React, { useEffect } from "react";

import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import {setIsAddBtnLoading, resetIsAddBtnSuccess } from "../../../actions";

import './ProductCardBtn.scss';

const ProductCardBtn = ({
                          addToCart,
                          isAddBtnLoading,
                          isAddBtnSuccess,
                          setIsAddBtnLoading,
                          resetIsAddBtnSuccess
}) => {
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

  useEffect(() => {
    if (isAddBtnLoading) {
      return;
    }
    setTimeout(resetIsAddBtnSuccess, 2000);
  }, [isAddBtnLoading]);

  function onAddClick() {
    if (isAddBtnLoading) {
      return;
    }
    setIsAddBtnLoading();
    setTimeout(addToCart, 1500);
    // addToCart();
  }

  return (
    <div className="product-card-button-wrapper">
      <button
        onClick={onAddClick}
        className="product-card-button"
      >
        {
          isAddBtnLoading ? <CircularProgress size={20} color="inherit" /> : <ButtonInner />
        }
      </button>
      {
        isAddBtnSuccess && !isAddBtnLoading ? <ButtonNotification /> : null
      }
    </div>
  );
};

const mapStateToProps = ({ isAddBtnLoading, isAddBtnSuccess }) => {
  return { isAddBtnLoading, isAddBtnSuccess };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsAddBtnLoading: () => dispatch(setIsAddBtnLoading()),
    resetIsAddBtnSuccess: () => dispatch(resetIsAddBtnSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCardBtn);
