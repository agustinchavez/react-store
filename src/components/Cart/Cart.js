import React, { Component } from 'react';
import fakeData from '../../fakeData';

class Cart extends Component {
    
    constructor() {
        super();
        this.beforeTax = 0;
        this.totalTax = 0;
        this.finalTotal = 0;
             
    }

    totalPrice(){
         var itemPrice = this.props.cart.reduce((prev, item) => item.price * (item.quantity || 1) + prev, 0);
        
        var shippingPrice = this.props.cart.reduce((prev, item) => item.shipping * (item.quantity || 1) + prev, 0);

        this.price = this.roundTwoDecimal(itemPrice);
        this.shipping = this.roundTwoDecimal(shippingPrice);
        this.tax = this.roundTwoDecimal((this.price + this.shipping) * 0.1);
        this.beforeTax = this.roundTwoDecimal(this.price + this.shipping);
        this.total = this.roundTwoDecimal(this.price + this.shipping + this.tax);
    }
    
    getItemCount(number){
        return (Math.round(number * 100) / 100);
    }

    // getItemCount() {
    //     const cart = this.props.cart;
    //     const itemKeys = Object.keys(cart);
    //     return itemKeys.reduce((prev, key) => { 
    //         return prev + cart[key];
    //     }, 0);

    // }

    // getTotal(){
    //     const cart = this.props.cart;
    //     const itemKeys = Object.keys[cart];
    //     const price = itemKeys.reduce((first, second) => {const item = fakeData.find(itm => itm.second === second);
    //         const itemPrice = item.price * cart[second];
    //         return first + itemPrice;
    //     });

    //     this.beforeTax = price;


    // }

    render() {
        const cart = this.props.cart;
        this.getItemCount();
        return (
            <div>
                <h3>Order Summary</h3>
                <p>Items Ordered: {this.props.cart.length}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                Items:
                            </td>
                            <td>
                                ${this.price}
                            </td>
                        </tr>
                        <tr>
                            <td>Shipping & Handling:</td>
                            <td>{this.shipping}</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>{this.beforeTax}</td>
                        </tr>
                        <tr>
                            <td>Estimated tax:</td>
                            <td>{this.tax}</td>
                        </tr>
                        <tr>
                            <td>Order Total:</td>
                            <td>{this.total}</td>
                        </tr>
                    </tbody>
                </table>
                {this.props.children}
            </div>
        );
    }
}

export default Cart;