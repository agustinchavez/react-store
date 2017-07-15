import React, { Component } from 'react';

class Cart extends Component {
    
    constructor(props) {
        super(props);
            
    }
    
    render() {
        return (
            <div>
                <h3>  Order Summary</h3>
                <p>Items Ordered: {this.props.cart.length}</p>
                <button>Review my Order</button>
            </div>
        );
    }
}

export default Cart;