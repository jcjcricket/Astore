import React, { Fragment } from 'react';

import './goods-list-item.css';

const GoodsListItem = ({ goods }) => {
  const { type, qnty } = goods;

  return (
    <div>
      <Fragment>
        <span>{type}</span>
        <span>{qnty}</span>
      </Fragment>
    </div>
  );
};

export default GoodsListItem;
