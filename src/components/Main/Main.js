import React from 'react';

import Card from '../Card/Card';

import './Main.scss';
import image from '../../assets/images/png/ice cream.png';

const Main = () => (
  <div className="menu">
    <h1>I <span></span> ice cream</h1>
    <div className="container cards">
      <Card
        text="Snow Tender Ice Cream"
        image={image}
        price="243.00"
      />
      <Card
        text="Snow Tender Ice Cream"
        image={image}
        price="243.00"
      />
      <Card
        text="Snow Tender Ice Cream"
        image={image}
        price="243.00"
      />
      <Card
        text="Snow Tender Ice Cream"
        image={image}
        price="243.00"
      />
      <Card
        text="Snow Tender Ice Cream"
        image={image}
        price="243.00"
      />
      <Card
        text="Snow Tender Ice Cream"
        image={image}
        price="243.00"
      />
    </div>
  </div>
);

export default Main;
