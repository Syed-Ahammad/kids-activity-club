import React from 'react';
import Activity from '../activity/Activity';
import './Activities.css'

const Activities = ({activities, handleAddToCart}) => {
    return (
        <div>
             <h3>Select Your Activity</h3>
             <div className="activities-container">
               {activities.map(activity => <Activity activity={activity}key={activity.id} handleAddToCart={handleAddToCart}></Activity>)}
            </div>
        </div>
    );
};

export default Activities;