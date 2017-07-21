import React, { Component } from 'react';

class CartItem extends Component {
    // const item = this.props.item;
    render() {
        return (
            <div>
                {this.props.item.name}
            </div>
        );
    }
}

export default CartItem;