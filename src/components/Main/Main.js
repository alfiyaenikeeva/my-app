import React from 'react';

import Card from '../Card/Card';

import './Main.scss';
import cardsArr from '../../cards-arr/cards-arr';

const Main = () => (
    <div className="main">
      <h1>I <span></span> ice cream</h1>
      <div className="container cards">
        { cardsArr.map(({ image,
                          title,
                          price,
                          id,
                        }) => <Card image={image} title={title} price={price} id={id} key={id} />) }
      </div>
    </div>
  );

export default Main;
