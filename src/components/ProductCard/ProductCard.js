import React from 'react';

import ProductCardBtn from './ProductCardBtn/ProductCardBtn';
import ProductCardInput from './ProductCardInput/ProductCardInput';
import MainNav from '../MainNav/MainNav';

import cardsArr from "../../cards-arr/cards-arr";

import './ProductCard.scss';

const ProductCard = ({ match }) => {
  const cardId = match.params.id;

  const productCard = cardsArr.find(card => card.id == cardId);
  const {
    image,
    code,
    title,
    descr1,
    descr2,
    price,
  } = productCard;

  return (
    <div className="product-card">
      <MainNav />
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

            <ProductCardInput />
          </div>

          <ProductCardBtn />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
