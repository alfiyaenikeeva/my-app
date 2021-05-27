const cardsLoaded = (cards) => {
  return {
    type: 'CARDS_LOADED',
    payload: cards,
  };
};

export {
  cardsLoaded,
};
