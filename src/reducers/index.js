const initialState = {
  cards: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CARDS_LOADED':
      return {
        cards: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;
