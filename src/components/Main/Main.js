import React from 'react';

import Card from '../Card/Card';

import './Main.scss';
import image from '../../assets/images/png/ice cream.png';

const Main = () => {
  const cardsArray = [
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
    },
  ];

  return (
    <div className="main">
      <h1>I <span></span> ice cream</h1>
      <div className="container cards">
        { cardsArray.map((card) => <Card {...card} />) }
      </div>
    </div>
  );
};

export default Main;
