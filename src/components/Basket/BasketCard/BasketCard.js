import React from "react";

import './BasketCard.scss';

const BasketCard = ({ amount,
                      price,
                      title,
                      image,
                      id,
                      deleteFromCart,
                      setCartsTotal,
                      setCartsPriceTotal,
                    }) => {

  function onDeleteClick() {
    deleteFromCart(id);
    setCartsTotal();
    setCartsPriceTotal();
  }

  return (
    <div className="basket-card">
      <div className="basket-card-image">
        <img src={image} alt="product" />
      </div>

      <div className="basket-card-info">
        <p className="basket-card-title">{title}</p>
        <span className="basket-card-amount">{amount} pcs.</span>
      </div>

      <span className="basket-card-price">${price}</span>

      <div
        onClick={onDeleteClick}
        className="basket-card-btn"
      ></div>
    </div>
  );
};

export default BasketCard;
