import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './Shop.css'

import fakeData from '../../fakeData';
import ShopItem from '../ShopItem/ShopItem';
import Cart from '../Cart/Cart';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';

class Shop extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            cart: [],
            cartCount:{}
        }
        this.addToCart = this.addToCart.bind(this);
    }
    
    componentDidMount() {
        var first10 = fakeData.slice(0,10);
        this.setState({
            items:first10
        });

        var cart = getDatabaseCart();
        var keys = Object.keys(cart);
        var items = keys.map(key => {
            var item = fakeData.find(itm => itm.key === key);
            item.quantity = cart[key];
            return item;
        });
        this.setState({
            cart: items
        });
    }
    
    addToCart(key){
        var selectedItem = this.state.items.find(item => item.key === key);
        var newCart = [...this.state.cart]; //copy current/existing cart
        newCart.push(selectedItem); //added selectedItem to the newCart
        //update the state and tell react that the state changed

        var newCartCount = Object.assign({}, this.state.cartCount);
        var previousCount = newCartCount[key] || 0;
        var newCount = previousCount +1;
        newCartCount[key] = newCount;

        this.setState({ 
            cart:newCart,
            cartCount: newCartCount
        });
        
        addToDatabaseCart(key, newCount);
    }

    render() {
        return (
            <div>
                <div className="shop-container">
                    <div className="items-container">
                        <h1>Shop for these items</h1>
                        {this.state.items.map(item => (
                            <ShopItem 
                                key={item.key} 
                                addToCart={this.addToCart}
                                item={item}>{item}
                            </ShopItem>))}
                    </div>
                    <div className="cart-container">
                        <Cart cart={this.state.cart}>
                            <Link to="/review">
                                <button>
                                    <span>Review your order </span>
                                </button>
                            </Link>
                        </Cart>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;