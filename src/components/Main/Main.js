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
      id: 1,
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
      id: 2,
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
      id: 3,
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
      id: 4,
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
      id: 5,
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
      id: 6,
    },
    {
      image,
      text: 'Snow Tender Ice Cream',
      price: '243.00',
      id: 7,
    },
  ];

  return (
    <div className="main">
      <h1>I <span></span> ice cream</h1>
      <div className="container cards">
        { cardsArray.map(({ ...card }) => <Card {...card} key={card.id} />) }
      </div>
    </div>
  );
};

export default Main;
