import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Naši doktori</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Od nijazije informacije'
              label='Dr Nijazija Hajradinović'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Od amara informacije'
              label='Amar Hajradinović'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
