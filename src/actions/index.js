const goodsLoaded = (newGoods) => {
  return {
    type: 'FETCH_GOODS_SUCCESS',
    payload: newGoods,
  };
};

const goodsRequested = () => {
  return {
    type: 'FETCH_GOODS_REQUESTED',
  };
};

const goodsError = (err) => {
  return {
    type: 'FETCH_GOODS_FAILURE',
    payload: err,
  };
};

const fetchGoods = (storeService, dispatch) => () => {
  dispatch(goodsRequested());
  storeService
    .getGoods()
    .then((data) => {
      dispatch(goodsLoaded(data));
    })
    .catch((err) => {
      dispatch(goodsError(err));
    });
};

const goodsAddedToCart = (goodsId) => {
  return {
    type: 'GOODS_ADDED_TO_CART',
    payload: goodsId,
  };
};

const goodsRemovedFromCart = (goodsId) => {
  return {
    type: 'GOODS_REMOVED_FROM_CART',
    payload: goodsId,
  };
};

const allGoodsRemovedFromCart = (goodsId) => {
  return {
    type: 'ALL_GOODS_REMOVED_FROM_CART',
    payload: goodsId,
  };
};

export { fetchGoods, goodsAddedToCart,goodsRemovedFromCart, allGoodsRemovedFromCart };
