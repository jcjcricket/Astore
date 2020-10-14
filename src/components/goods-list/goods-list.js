import React, { Component } from 'react';
import GoodsListItem from '../goods-list-item';
import { connect } from 'react-redux';

import { withStoreService } from '../hoc';
import { goodsLoaded } from '../../actions';

import './goods-list.css';

class GoodsList extends Component {
  componentDidMount() {
    const { storeService, goodsLoaded } = this.props;
    storeService.getGoods().then((data) => {
      goodsLoaded(data);
    });
  }

  render() {
    const { goods } = this.props;
    const goodsList = goods.map((item) => {
      return (
        <li key={item.id}>
          <GoodsListItem goods={item} />
        </li>
      );
    });
    return <ul>{goodsList}</ul>;
  }
}

const mapStateToProps = ({ goods }) => {
  return {
    goods,
  };
};

const mapDispatchToProps = {
  goodsLoaded,
};

export default withStoreService()(
  connect(mapStateToProps, mapDispatchToProps)(GoodsList)
);
