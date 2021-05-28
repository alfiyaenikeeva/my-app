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
};

const setCartsPriceTotal = () => {
  return {
    type: 'SET_CARTS_PRICE_TOTAL',
  }
}

const setIsAddBtnLoading = () => {
  return {
    type: 'SET_IS_ADD_BTN_LOADING',
  }
};

const resetIsAddBtnSuccess = () => {
  return {
    type: 'RESET_IS_ADD_BTN_SUCCESS',
  }
};

const deleteFromCart = (id) => {
  return {
    type: 'DELETE_FROM_CART',
    payload: id,
  }
};

const checkoutCart = () => {
  return {
    type: 'CHECKOUT_CART',
  }
};

const setIsModal = (bool) => {
  return {
    type: 'SET_IS_MODAL',
    payload: bool,
  }
};

const setIsRegistered = (bool) => {
  return {
    type: 'SET_IS_REGISTERED',
    payload: bool,
  }
};

const setIsLogged = (bool) => {
  return {
    type: 'SET_IS_LOGGED',
    payload: bool,
  }
};

export {
  cardsLoaded,
  addToCart,
  setCartsTotal,
  setIsAddBtnLoading,
  resetIsAddBtnSuccess,
  setCartsPriceTotal,
  deleteFromCart,
  checkoutCart,
  setIsModal,
  setIsRegistered,
  setIsLogged,
};
