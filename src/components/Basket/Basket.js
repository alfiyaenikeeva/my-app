import React from "react";

import MainNav from '../MainNav/MainNav';
import BasketCard from './BasketCard/BasketCard';
import BasketTotal from './BasketTotal/BasketTotal';

import './Basket.scss';

const Basket = () => (
  <div className="basket">
    <MainNav text="Basket" />
    <div className="container">
      <h2 className="basket-title">Basket</h2>

      <div className="basket-layout">
        <div className="basket-cards">

          <BasketCard />
          <BasketCard />
          <BasketCard />
          <BasketCard />

        </div>
        <BasketTotal />
      </div>
    </div>
  </div>
);

export default Basket;
