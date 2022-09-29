import React, { useEffect, useState } from 'react';
import About from '../about/About';
import ActivityDetails from '../activityDetails/ActivityDetails';
import Break from '../break/Break';
import { addToDb, getaddedBreak } from '../localstotage/localstorage';
import './Cart.css'

const Cart = ({active}) => {
    const [addBreak, setAddBreak] = useState([0]);

    useEffect(()=>{
        const saveTime = getaddedBreak();
        setAddBreak(saveTime);
    },[])

    const breakTime = [{time: 10,key: 1},
        {time: 8,key: 2},
        {time: 6,key: 3},
        {time: 4,key: 4}
    ];
    
    const addToBreak = (time)=>{
       
        setAddBreak(time)
        addToDb(time)
    }
    return (
        <div>
            <div className="selected-container">
            <About></About>
            <Break breakTime={breakTime} addToBreak={addToBreak}></Break>
            <ActivityDetails addBreak={addBreak} active={active}></ActivityDetails>
            <button className='btn-complete'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;