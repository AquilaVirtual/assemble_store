import React, { Component } from 'react'
import {NavLink } from 'react-router-dom';


class Cart extends Component {  
    
    render() {
        return (
            <div className="cart">
                <div>
                {this.props.products.length} Cart</div>
                {this.props.products.length ? (<NavLink className="btn btn-primary" to="/checkout">Go to Checkout</NavLink>):(null)}
                
                 </div>
        )
    }
}

export default Cart;