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

    calculateCost() {
        var totalPrice = this.props.cart.reduce((prev, item) => {
            var quantity = 1;
            var thisItemPrice = item.price * quantity
            return thisItemPrice + prev
        }, 0);
        //take the total price of the items, the initial zero is what it starts with

        var shipingPrice = this.props.cart.reduce((prev, item) => {
            var quantity = 1;
            var thisItemShippingPrice = item.shipping * quantity;
            return thisItemShippingPrice + prev
        }, 0);

        var taxPrice = this.props.cart.reduce((prev, item) => {
            var quantity = 1;
            var thisItemTaxPrice = (this.price + this.shipping) * 0.1;
            return thisItemTaxPrice + prev
        }, 0);

        var beforeTaxPrice = this.props.cart.reduce((prev,item) => {
            var quantity = 1;
            var thisItemBeforeTaxPrice = (this.price + this.shipping) * quantity;
            return thisItemBeforeTaxPrice + prev
        }, 0);

        var grandTotalPrice = this.props.cart.reduce((prev, item) => {
            var quantity = 1;
            var thisGrandTotalPrice = (this.price + this.shipping + this.tax);
            return thisGrandTotalPrice + prev
        }, 0);


        this.price = this.roundTwoDecimal(totalPrice);

        this.shipping = this.roundTwoDecimal(shipingPrice);

        // this.tax = this.roundTwoDecimal(taxPrice);

        // this.beforeTax = this.roundTwoDecimal(beforeTaxPrice);

        // this.grandTotal = this.roundTwoDecimal(grandTotalPrice);
        this.tax = this.roundTwoDecimal((this.price + this.shipping) * 0.1);
        this.beforeTax = this.roundTwoDecimal(this.price + this.shipping);
        this.grandTotal = this.roundTwoDecimal(this.price + this.shipping + this.tax);

        
    }

    roundTwoDecimal(number) {
        //make the price number two decimal places
        return (Math.round(number * 100)/100);
    }


    render() {
        const cart = this.props.cart;
        this.calculateCost();
        return (
            <div>
                <h3>Order Summary</h3>
                <p>Items Ordered: {cart.length}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Items:</td>
                            <td>${this.price}</td>
                        </tr>
                        <tr>
                            <td>Shipping & Handling:</td>
                            <td>${this.shipping}</td>
                        </tr>
                        <tr>
                            <td>Total before tax:</td>
                            <td>${this.beforeTax}</td>
                        </tr>
                        <tr>
                            <td>Estimated tax:</td>
                            <td>${this.tax}</td>
                        </tr>
                        <tr>
                            <td>Order Total:</td>
                            <td>${this.grandTotal}</td>
                        </tr>
                    </tbody>
                </table>
                {/* passing child elements of shop */}
                {this.props.children}
            </div>
        );
    }
}

export default Cart;