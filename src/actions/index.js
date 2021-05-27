const cardsLoaded = (cards) => {
  return {
    type: 'CARDS_LOADED',
    payload: cards,
  };
};

const addToCart = (obj) => {
  return {
    type: 'ADD_TO_CART',
    payload: obj,
  }
};

const setCartsTotal = () => {
  return {
    type: 'SET_CARTS_TOTAL',
  }
}

export {
  cardsLoaded,
  addToCart,
  setCartsTotal,
};
