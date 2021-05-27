import React, { useState } from 'react';

import ProductCardBtn from './ProductCardBtn/ProductCardBtn';
import ProductCardInput from './ProductCardInput/ProductCardInput';
import MainNav from '../MainNav/MainNav';
import { connect } from "react-redux";
import {addToCart, setCartsPriceTotal, setCartsTotal} from '../../actions/index';

import './ProductCard.scss';

const ProductCard = ({ match, addToCart, cards, setCartsTotal, setCartsPriceTotal }) => {
  const [count, setCount] = useState(1);

  function onAddToCart() {
    const obj = {
      price,
      title,
      image,
      id: cardId,
      amount: count,
    };

    addToCart(obj);
    setCartsTotal();
    setCartsPriceTotal();
  }

  function onCountClick(n) {
    setCount(() => count + n);
  }

  const cardId = match.params.id;

  const productCard = cards.find(card => card.id == cardId);

  if (!productCard) {
    return <div className="main">Card not found!</div>
  }

  const {
    image = '',
    code = '',
    title = '',
    descr1 = '',
    descr2 = '',
    price = '',
  } = productCard;

  return (
    <div className="product-card">
      <MainNav text="Product card" />
      <div className="container">

        <div className="product-card-image">
          <img src={image} alt="product" />
        </div>
        <div className="product-card-info">
          <div className="product-card-code">{code}</div>
          <h2 className="product-card-title">{title}</h2>
          <p className="product-card-subtitle">Description: </p>
          <p className="product-card-descr">
            {descr1}
            <br />
            <br />
            {descr2}
          </p>
          <div className="product-card-flex">
            <span className="product-card-price">${price}</span>

            <ProductCardInput
              count={count}
              onCountClick={onCountClick}
            />
          </div>

          <ProductCardBtn
            addToCart={onAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cards }) => {
  return { cards };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (obj) => dispatch(addToCart(obj)),
    setCartsTotal: () => dispatch(setCartsTotal()),
    setCartsPriceTotal: () => dispatch(setCartsPriceTotal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
