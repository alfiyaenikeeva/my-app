import React from 'react';

import ProductCardBtn from './ProductCardBtn/ProductCardBtn';
import ProductCardInput from './ProductCardInput/ProductCardInput';
import MainNav from '../MainNav/MainNav';

import image from '../../assets/images/png/product ice cream.png';
import './ProductCard.scss';

const ProductCard = () => (
  <div className="product-card">
    <MainNav />
    <div className="container">


      <div className="product-card-image">
        <img src={image} alt="product" />
      </div>
      <div className="product-card-info">
        <div className="product-card-code">SKU: BXD100BLK</div>
        <h2 className="product-card-title">Snow Tender Ice Cream</h2>
        <p className="product-card-subtitle">Description: </p>
        <p className="product-card-descr">
          Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.
          <br />
          <br />
          Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.
        </p>
        <div className="product-card-flex">
          <span className="product-card-price">$243.00</span>

          <ProductCardInput />
        </div>

        <ProductCardBtn />
      </div>
    </div>
  </div>
);

export default ProductCard;
