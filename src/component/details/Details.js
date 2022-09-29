import React from 'react';
import './Details.css'

const Details = () => {
    return (
        <div>
            <div className='about'>
                    <img src="syed.jpeg" alt="" />
                    <div>
                        <h1>Syed Ahammad</h1>
                        <p>Feni, Chottogram, Bangladesh</p>
                    </div>
                </div>
                <div className='health'>
                    <p><span className='number'>55</span>KG <br/>
                    <span className='option'>Weight</span></p>
                    <p><span className='number'>5.5</span>Feet<br/>
                    <span className='option'>Height</span></p>
                    <p><span className='number'>25</span>Years <br/>
                    <span className='option'>Age</span></p>
                </div>
        </div>
    );
};

export default Details;