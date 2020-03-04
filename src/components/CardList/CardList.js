import React, { Component } from 'react';
import './CardList.scss';
import Card from '../card/Card';

const CardList = (props) => {


    return (
        <div className="cardList">
            <ul className="cardList__list">
                {props.state.map((card) => {
                    return <Card card={card} />;
                })}
            </ul>

        </div>
    );

}

export default CardList;