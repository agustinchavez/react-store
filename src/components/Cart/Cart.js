import React, { Component } from 'react';
import fakeData from '../../fakeData';

class Cart extends Component {
    
    constructor() {
        super();
        this.price = 0;
        this.shipping = 0;
        this.beforeTax = 0;
        this.tax = 0;
        this.total = 0;
             
    }

    totalPrice(){
         var itemPrice = this.props.cart.reduce((prev, item) => item.price * item.quantity, 0);
        

        this.price = this.getItemCount(itemPrice);
    }
    
    getItemCount(number){
        return number;
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
        this.totalPrice();
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