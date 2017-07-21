import React, { Component } from 'react';

import Header from '../Header/Header'
import Cart from '../Cart/Cart'
import CartItem from '../CartItem/CartItem'
import {getDataBaseCart, removeDatabaseCart, processOrder } from '../../utilities/databaseManager';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';



class OrderReview extends Component {
    constructor(){
        super();
        this.state = {
            cart: [],
            // isOrdered: false
        }
        // this.handleRemove = this.handleRemove.bind(this);
        // this.handleOrder = this.handleOrder.bind(this);
    }

    componentDidMount(){
        var cart = getDatabaseCart();
        var keys = Object.keys(cart); //["ADES","ESAERS"]
        var items = keys.map(key => {
            var item = fakeData.find(itm => itm.key === key);
            item.quantity = cart[key];
            return item;
        });
        this.setState({
            cart: items
        });
    }

    render() {
        return (
            <div>
                <Header></Header>
                <h1>Order Review</h1>
                <div className="sho-container">
                    {this.state.cart.map(item =>
                    <CartItem 
                        key ={item.key} 
                        item = {item}>
                    </CartItem>)}
                    <div className="items-container">

                    </div>
                    <div className="cart-container">

                    </div>
                </div>
            </div>
        );
    }
}

export default OrderReview;