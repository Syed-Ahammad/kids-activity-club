import React from 'react';
import Activity from '../activity/Activity';
import './Activities.css'

const Activities = ({activities, handleAddToCart}) => {
    return (
        <div>
             <div className="product-container">
               {activities.map(activity => <Activity activity={activity}key={activity.id} handleAddToCart={handleAddToCart}></Activity>)}
            </div>
        </div>
    );
};

export default Activities;