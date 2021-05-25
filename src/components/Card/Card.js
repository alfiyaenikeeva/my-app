import React from 'react';

import './Card.scss';

const Card = ({text, image, price}) => (
  <div className="card">
    <div className="card-image">
      <img src={image} alt="ice-cream"/>
    </div>
    <div className="card-info">
      <p className="card-name">{text}</p>
      <span className="card-price">${price}</span>
    </div>
  </div>
);

export default Card;
