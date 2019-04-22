import React, { Component } from 'react'
import {NavLink } from 'react-router-dom';

import "../css/OrderComplete.css"


class OrderComplete extends Component {  
    
    render() {
        return (

            <div className="container">
                <div className="order-complete">Order Complete</div>
                <div className="body-section">
                <div className="section-text">
                 Hooray! Way to Order those products!
                 </div>
                 <NavLink className="btn btn-primary" to="/">Go Home</NavLink>
                 </div>
                 </div>
        )
    }
}

export default OrderComplete;