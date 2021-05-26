import React from 'react';

import ProductCardBtn from './ProductCardBtn/ProductCardBtn';
import ProductCardInput from './ProductCardInput/ProductCardInput';
import MainNav from '../MainNav/MainNav';

import './ProductCard.scss';

const ProductCard = ({ match }) => {
  const cardId = match.params.id;

  const productCardsArr = [
    {
      image: '../../assets/images/png/product ice cream.png',
      code: 'SKU: BXD100BLK',
      title: 'Snow Tender Ice Cream',
      descr1: 'Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.',
      descr2: 'Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.',
      price: '243.00',
      id: 1,
    },
    {
      image: '../../assets/images/png/product ice cream.png',
      code: 'SKU: BXD100BLK',
      title: 'Snow Tender Ice Cream',
      descr1: 'Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.',
      descr2: 'Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.',
      price: '243.00',
      id: 2,
    },
    {
      image: '../../assets/images/png/product ice cream.png',
      code: 'SKU: BXD100BLK',
      title: 'Snow Tender Ice Cream',
      descr1: 'Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.',
      descr2: 'Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.',
      price: '243.00',
      id: 3,
    },
    {
      image: '../../assets/images/png/product ice cream.png',
      code: 'SKU: BXD100BLK',
      title: 'Snow Tender Ice Cream',
      descr1: 'Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.',
      descr2: 'Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.',
      price: '243.00',
      id: 4,
    },
    {
      image: '../../assets/images/png/product ice cream.png',
      code: 'SKU: BXD100BLK',
      title: 'Snow Tender Ice Cream',
      descr1: 'Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.',
      descr2: 'Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.',
      price: '243.00',
      id: 5,
    },
    {
      image: '../../assets/images/png/product ice cream.png',
      code: 'SKU: BXD100BLK',
      title: 'Snow Tender Ice Cream',
      descr1: 'Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.',
      descr2: 'Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.',
      price: '243.00',
      id: 6,
    },
    {
      image: '../../assets/images/png/product ice cream.png',
      code: 'SKU: BXD100BLK',
      title: 'Snow Tender Ice Cream',
      descr1: 'Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.',
      descr2: 'Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.',
      price: '243.00',
      id: 7,
    },
  ];

  const productCard = productCardsArr.find(card => card.id == cardId);
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
