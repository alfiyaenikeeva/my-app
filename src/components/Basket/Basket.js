import React from "react";

import MainNav from '../MainNav/MainNav';
import BasketCard from './BasketCard/BasketCard';
import BasketTotal from './BasketTotal/BasketTotal';
import { connect } from 'react-redux';
import {
  deleteFromCart,
  setCartsTotal,
  setCartsPriceTotal,
  checkoutCart,
} from '../../actions/index';

import './Basket.scss';

const Basket = ({
                  cart,
                  cartsPriceTotal,
                  deleteFromCart,
                  setCartsTotal,
                  setCartsPriceTotal,
                  checkoutCart,
                }) => {
  function createInner(cardsArr) {
    return cardsArr.map(card => {
      return (
        <BasketCard
          {...card}
          key={card.id}
          deleteFromCart={deleteFromCart}
          setCartsTotal={setCartsTotal}
          setCartsPriceTotal={setCartsPriceTotal}
        />
      )
    });
  }

  function onCheckoutClick() {
    checkoutCart();
    setCartsTotal();
    setCartsPriceTotal();
  }

  const inner = cart.length !== 0 ? createInner(cart) : <div>Cart is empty!</div>;

  return (
    <div className="basket">
      <MainNav text="Basket" />
      <div className="container">
        <h2 className="basket-title">Basket</h2>

        <div className="basket-layout">
          <div className="basket-cards">
            { inner }
          </div>
          <BasketTotal
            onCheckoutClick={onCheckoutClick}
            total={cartsPriceTotal}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart, cartsPriceTotal }) => {
  return { cart, cartsPriceTotal };
};

const mapDispatchToProps = {
  deleteFromCart,
  setCartsTotal,
  setCartsPriceTotal,
  checkoutCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
