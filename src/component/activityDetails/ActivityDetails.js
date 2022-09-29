import React from 'react';
import './ActivityDetails.css'

const ActivityDetails = ({addBreak, active}) => {
    return (
        <div>
            <h3>Activity Details</h3>
            <h4>Activity Time:  <span>{active}  Min</span> </h4>
            <h4> Break Time:  <span>{addBreak}  Min</span> </h4>
        </div>
    );
};

export default ActivityDetails;