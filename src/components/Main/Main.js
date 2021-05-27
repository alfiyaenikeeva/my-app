import React, { Component } from 'react';

import Card from '../Card/Card';
import { connect } from 'react-redux';
import withCardsService from "../hoc/withCardsService";
import { cardsLoaded } from "../../actions";

import './Main.scss';

class Main extends Component {
  componentDidMount() {
    const { cardsService, cardsLoaded } = this.props;
    const data = cardsService.getCards();
    cardsLoaded(data);
  }

  render() {
    const { cards } = this.props;

    return (
      <div className="main">
        <h1>I <span></span> ice cream</h1>
        <div className="container cards">
          { cards.map(({ image,
                         title,
                         price,
                         id,
                       }) => <Card image={image} title={title} price={price} id={id} key={id} />) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cards }) => {
  return { cards };
};

const mapDispatchToProps = {
  cardsLoaded,
}

export default withCardsService()(connect(mapStateToProps, mapDispatchToProps)(Main));
