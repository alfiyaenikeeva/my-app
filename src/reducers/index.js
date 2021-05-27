const initialState = {
  cards: [],
  cart: [],
  cartsTotal: 1,
  isAddBtnLoading: false,
  isAddBtnSuccess: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CARDS_LOADED':
      return {
        ...state,
        cards: action.payload,
      };
    case 'ADD_TO_CART':
      const obj = action.payload;
      const card = state.cart.find((card) => card.id === obj.id);
      let newCard;
      if (card) {
        newCard = {
          ...obj,
          amount: card.amount + obj.amount,
        };
      } else {
        newCard = {
          ...obj,
        };
      }

      return {
        ...state,
        isAddBtnLoading: false,
        isAddBtnSuccess: true,
        cart: [
          ...state.cart.filter((card) => card.id !== obj.id),
          newCard,
        ],
      }
    case 'SET_CARTS_TOTAL':
      const total = state.cart.reduce((prev, next, i) => prev + next.amount, 0);

      console.log(total);
      console.log(state.cart);

      return {
        ...state,
        cartsTotal: total,
      }
    case 'SET_IS_ADD_BTN_LOADING':
      return {
        ...state,
        isAddBtnLoading: true,
      }
    case 'RESET_IS_ADD_BTN_SUCCESS':
      return {
        ...state,
        isAddBtnSuccess: false,
      }
    default:
      return state;
  }
}

export default reducer;
