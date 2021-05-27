import React from 'react';

import Card from '../Card/Card';
import withCardsService from "../hoc/withCardsService";

import './Main.scss';

const Main = ({ cardsService }) => (
    <div className="main">
      <h1>I <span></span> ice cream</h1>
      <div className="container cards">
        { cardsService.getCards().map(({ image,
                          title,
                          price,
                          id,
                        }) => <Card image={image} title={title} price={price} id={id} key={id} />) }
      </div>
    </div>
  );

export default withCardsService()(Main);
