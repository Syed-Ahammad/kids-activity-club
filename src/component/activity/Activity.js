import React from 'react';
import './Activity.css'

const Activity = ({activity, handleAddToCart}) => {
    const {picture, activityName, time, age, about} = activity;
    return (
        <div className='activity'>
            <img src={picture} alt="" />
            <h3>{activityName}</h3>
            <div>
            <p>{about}</p>
            <p>For Age: {age}</p>
            <p>Time required: {time} Min</p>
            </div>
            <button onClick={() =>handleAddToCart(activity)}><p>Add to list</p></button>
        </div>
    );
};

export default Activity;