import React from "react";
import { CardsServiceConsumer } from "../cardsServiceContext/cardsServiceContext";

const withCardsService = () => (Wrapped) => {
  return (props) => {
    return (
      <CardsServiceConsumer>
        {
          (cardsService) => {
            return (
              <Wrapped {...props} cardsService={cardsService}/>
            )
          }
        }
      </CardsServiceConsumer>
    );
  };
};

export default withCardsService;
