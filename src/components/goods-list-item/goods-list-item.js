import React from 'react';

import './goods-list-item.css';

const GoodsListItem = ({ goods }) => {
  const { type, color, price } = goods;

  return (
    <div className='card rounded shadow-sm border-0'>
      <div className='card-body d-flex'>
        <img
          src='https://mockupmark.com/api/templates/tshirt-20-thumb.jpg'
          alt=''
          className='img-fluid flex-fill'></img>
        <div className=' align-self-end text-right flex-fill'>
          <p className='text-dark ' >{color}</p>
          <p className='small text-muted font-italic'>{type}</p>
          <p className='small text-muted font-italic'>{price}$</p>
          <button className='btn btn-primary'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default GoodsListItem;
