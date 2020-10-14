const initialState = {
  goods: [
    
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOODS_LOADED":
      return {
        goods: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
