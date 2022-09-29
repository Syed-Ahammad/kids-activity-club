import React from 'react';
import About from '../about/About';
import './Cart.css'

const Cart = () => {
    const breakTime = [10, 5, 3, 6, 2];
    return (
        <div>
            <div className="selected-container">
            <About></About>
            </div>
        </div>
    );
};

export default Cart;