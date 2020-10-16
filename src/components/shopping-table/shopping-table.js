import React from 'react';
import { connect } from 'react-redux';
import {
  goodsAddedToCart,
  goodsRemovedFromCart,
  allGoodsRemovedFromCart,
} from '../../actions';

import './shopping-table.css';

const ShoppingTable = ({ items, onIncrease, onDecrease, onDelete }) => {
  const rowRender = (item, idx) => {
    const { id, type, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{type}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td>
          <button onClick={() => onIncrease(id)} className='btn btn-success'>
            <i className='fas fa-plus-circle'></i>
          </button>
          <button onClick={() => onDecrease(id)} className='btn btn-warning'>
            <i className='fas fa-minus-circle'></i>
          </button>
          <button onClick={() => onDelete(id)} className='btn btn-danger'>
            <i className='fas fa-trash-alt'></i>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h2>Your Order</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(rowRender)}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ cartItems }) => {
  return {
    items: cartItems,
  };
};

const mapDispatchToProps = {
  onIncrease: goodsAddedToCart,
  onDecrease: goodsRemovedFromCart,
  onDelete: allGoodsRemovedFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingTable);
