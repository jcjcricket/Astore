import React from 'react';

import './shopping-table.css';

const ShoppingTable = (props) => {
  return (
    <div>
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <td>#</td>
            <td>Item</td>
            <td>Count</td>
            <td>$</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>T-SHIRT SUPER ITEM</td>
            <td>2</td>
            <td>10</td>
            <td>
              <button className='btn btn-success'>
                <i className='fas fa-plus-circle'></i>
              </button>
              <button className='btn btn-warning'>
                <i className='fas fa-minus-circle'></i>
              </button>
              <button className='btn btn-danger'>
                <i className='fas fa-trash-alt'></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingTable;
