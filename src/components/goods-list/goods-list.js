import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStoreService } from '../hoc';
import { fetchGoods, goodsAddedToCart } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './goods-list.css';
import GoodsListItem from '../goods-list-item/goods-list-item';

class GoodsListContainer extends Component {
  componentDidMount() {
    this.props.fetchGoods();
  }

  render() {
    const { goods, loading, error, onAddedToCart } = this.props;
    if (error) {
      return <ErrorIndicator />;
    }
    if (loading) {
      return <Spinner />;
    }
    return <GoodsList goods={goods} onAddedToCart={onAddedToCart} />;
  }
}

const GoodsList = ({ goods, onAddedToCart }) => {
  return (
    <ul>
      {goods.map((item) => {
        return (
          <li key={item.id}>
            <GoodsListItem
              goods={item}
              onAddedToCart={() => {
                onAddedToCart(item.id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = ({ goods, loading, error }) => {
  return {
    goods,
    loading,
    error,
  };
};

const mapDispatchToProps = (dispatch, { storeService }) => {
  return {
    fetchGoods: fetchGoods(storeService, dispatch),
    onAddedToCart: (id) => dispatch(goodsAddedToCart(id)),
  };
};

export default withStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(GoodsListContainer)
);
