import React, { Component } from 'react';
import './Card.scss';
import img from '../../img/pineapple.jpg';

const Card = ({ card }) => (
    <div className='card'>
        <div className='card__image'>
            <img src={img} alt='item' className='image' />
        </div>
        <div className='card__description'>
            <p className='card__description--name'>{card.title}</p>
            <span className='card__description--span'></span>
        </div>
        <div className='card__price'>
            <p className='card__price--value'>{card.currencyFormat}{card.price}</p>
            <p className='card__price--sale'>{card.description}</p>
        </div>
        <button className='card__btn'>Add to card</button>

    </div>
)





export default Card;