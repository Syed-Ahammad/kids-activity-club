import React from 'react';
import About from '../about/About';
import Break from '../break/Break';
import './Cart.css'

const Cart = () => {
    const breakTime = [{time: 10,key: 1},
        {time: 8,key: 2},
        {time: 6,key: 3},
        {time: 4,key: 4}
    ];
    const addToBreak = (time)=>{
        console.log(time);
    }
    return (
        <div>
            <div className="selected-container">
            <About></About>
            <Break breakTime={breakTime} addToBreak={addToBreak}></Break>
            </div>
        </div>
    );
};

export default Cart;