import React, { Component } from 'react';

import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import happy from '../../images/giphy.gif';
import fakeData from '../../fakeData';
import Header from '../Header/Header';
import Cart from '../Cart/Cart';
import CartItem from '../CartItem/CartItem';



class OrderReview extends Component {
    constructor(){
        super();
        this.state = {
            cart: [],
            // isOrdered: false
        }
        this.handleRemove = this.handleRemove.bind(this);
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

    handleRemove(key){
        var newCart = this.state.cart.filter(item => item.key !== key);
        this.setState({
            cart: newCart
        });
        // removeFromDatabaseCart(key);
    }

    render() {
        let itemSection = null;
        let cartSection = null;
        if (this.state.isOrdered) {
            itemSection = <img src={happy} alt="will add this later"/>
        } else {
            itemSection = this.state.cart.map(item => <CartItem key={item.key} item={item} handleRemove={this.handleRemove}></CartItem>)
            cartSection = (<Cart cart={this.state.cart}>
                            <button onClick={this.handleOrder}>
                                place order
                            </button>
                        </Cart>)
        }
        return (
            <div>
                <Header></Header>
                <h1>Order Review</h1>
                <div className="sho-container">
                    {this.state.cart.map(item =>
                    <CartItem 
                        key ={item.key} 
                        item = {item}
                        handleRemove={this.handleRemove}>
                    </CartItem>)}
                    <div className="items-container">
                        {itemSection}
                    </div>
                    <div className="cart-container">
                        {cartSection}
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderReview;