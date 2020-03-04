import React, { Component } from 'react';
import axios from 'axios';
import CardList from '../CardList/CardList';
import Select from '../Select/Select';
import './board.scss';

class Board extends Component {

    state = {
        products: [],

    }

    handleSelectChange = (e) => {
        const sortedProducts = [
            ...this.state.products,
        ]

        if (e.target.value === "lowest") {
            sortedProducts.sort((a, b) => {
                return (a.price - b.price)
            })
        } else if (e.target.value === "highest") {
            sortedProducts.sort((a, b) => {
                return (b.price - a.price)
            })
        }
        console.log(sortedProducts);
    }

    async componentDidMount() {
        const url = 'http://localhost:3001/products';
        const res = await axios.get(url);


        this.setState({
            products: res.data,
        })
    }


    render() {
        return (
            <div className='container'>
                <Select handleSelectChange={this.handleSelectChange} />
                <CardList state={this.state.products} />

            </div>
        );
    }
}

export default Board;