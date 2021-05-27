import React from 'react';
import { useHistory } from "react-router-dom";

import './Card.scss';

const Card = ({title, image, price, id}) => {
  let history = useHistory();

  function handleClick() {
    history.push(`/card/${id}`);
  }

  return (
    <div
      className="card"
      onClick={handleClick}
    >
      <div className="card-image">
        <img src={image} alt="ice-cream"/>
      </div>
      <div className="card-info">
        <p className="card-name">{title}</p>
        <span className="card-price">${price}</span>
      </div>
    </div>
  );
};

export default Card;
