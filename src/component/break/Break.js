import React from 'react';
import './Break.css'

const Break = ({breakTime, addToBreak}) => {
    return (
        <div>
            <div className='break'>
                 <h3>Add A Break</h3>
                <div className='btn-group'>
                {breakTime.map(p => <button onClick={()=>addToBreak(p.time)} key={p.key}>{p.time} <span>Min</span></button>)}
                </div>
            </div>
        </div>
    );
};

export default Break;