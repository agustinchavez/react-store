import React, { Component } from 'react';

class CartItem extends Component {
    // const item = this.props.item;
    render() {
        return (
            <div className="cart-item">
                <h4>{this.props.item.name}</h4>
                <div className="cart-item-container">
                    <button onClick={() => this.props.handleRemove(this.props.item.key)}>Remove</button>
                </div>
            </div>
        );
    }
}

export default CartItem;