import React, { Component } from 'react';
import './card.scss';
import img from '../../img/pineapple.jpg'

const Card = () => (
    <div className='card'>
        <div className='card__image'>
            <img src={img} alt='item' className='image' />
        </div>
        <div className='card__description'>
            <p className='card__description--name'> Pineapple</p>
            <span className='card__description--span'></span>
        </div>
        <div className='card__price'>
            <p className='card__price--value'>$3</p>
            <p className='card__price--sale'>or 3 x$8</p>
        </div>
        <button className='card__btn'>Add to card</button>

    </div>
)





export default Card;