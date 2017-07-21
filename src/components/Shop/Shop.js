import React, { Component } from 'react';
import './Shop.css'

import fakeData from '../../fakeData';
import ShopItem from '../ShopItem/ShopItem';
import Cart from '../Cart/Cart';

class Shop extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            cart: []
        }
        this.addToCart = this.addToCart.bind(this);
    }
    
    componentDidMount() {
        var first10 = fakeData.slice(0,10);
        this.setState({
            items:first10
        });
    }
    
    addToCart(key){
        var selectedItem = this.state.items.find(item => item.key === key);
        var newCart = [...this.state.cart]; //copy current/existing cart
        newCart.push(selectedItem); //added selectedItem to the newCart
        //update the state and tell react that the state changed
        this.setState({ 
            cart:newCart
        });
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
                        <Cart cart={this.state.cart}></Cart>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;