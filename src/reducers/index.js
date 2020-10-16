const initialState = {
  goods: [],
  loading: true,
  error: null,
  cartItems: [],
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (goodsItem, item = {}, qnty) => {
  const {
    id = goodsItem.id,
    type = goodsItem.type,
    count = 0,
    total = 0,
  } = item;
  return {
    id,
    type,
    count: count + qnty,
    total: total + qnty * goodsItem.price,
  };
};

const updateOrder = (state, goodsId, qnty) => {
  const { cartItems, goods } = state;
  const goodsItem = goods.find(({ id }) => id === goodsId);
  const cartItemIndex = cartItems.findIndex(({ id }) => id === goodsId);
  const cartItem = cartItems[cartItemIndex];
  const newItem = updateCartItem(goodsItem, cartItem, qnty);
  return {
    ...state,
    cartItems: updateCartItems(state.cartItems, newItem, cartItemIndex),
  };
};

const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case 'FETCH_GOODS_REQUESTED':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_GOODS_SUCCESS':
      return {
        ...state,
        goods: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_GOODS_FAILURE':
      return {
        ...state,
        goods: [],
        loading: false,
        error: action.payload,
      };
    case 'GOODS_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'GOODS_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL_GOODS_REMOVED_FROM_CART':
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    default:
      return state;
  }
};

export default reducer;
