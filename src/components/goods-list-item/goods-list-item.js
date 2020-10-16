import React from 'react';
import { Link } from 'react-router-dom';

import './goods-list-item.css';

const GoodsListItem = ({ goods, onAddedToCart }) => {
  const { type, color, price } = goods;

  return (
    <div className='card rounded shadow-sm border-0'>
      <div className='card-body d-flex'>
        <Link>
          <img
            src='https://mockupmark.com/api/templates/tshirt-20-thumb.jpg'
            alt=''
            className='img-fluid flex-fill'></img>
        </Link>

        <div className=' align-self-end text-right flex-fill'>
          <p className='text-dark '>{color}</p>
          <p className='small text-muted font-italic'>{type}</p>
          <p className='small text-muted font-italic'>{price}$</p>

          <button
            onClick={onAddedToCart}
            className='btn btn-primary'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default GoodsListItem;
