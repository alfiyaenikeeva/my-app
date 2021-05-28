const initialState = {
  cards: [],
  cart: [],
  cartsTotal: 0,
  cartsPriceTotal: 0,
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
    case 'DELETE_FROM_CART':
      const id = action.payload;
      return {
        ...state,
        cart: [
          ...state.cart.filter((card) => card.id !== id),
        ],
      }
    case 'CHECKOUT_CART':
      return {
        ...state,
        cart: [],
      }
    case 'SET_CARTS_TOTAL':
      const total = state.cart.reduce((prev, next, i) => prev + next.amount, 0);

      return {
        ...state,
        cartsTotal: total,
      }
    case 'SET_CARTS_PRICE_TOTAL':
      const priceTotal = state.cart.reduce((prev, next, i) => {
        return prev + (next.price * next.amount);
      }, 0);
      console.log(priceTotal.toFixed(2));

      return {
        ...state,
        cartsPriceTotal: priceTotal.toFixed(2),
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
