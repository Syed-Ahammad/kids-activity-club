import React from 'react';

const Quation = () => {
    return (
        <div className='quation-container'>
            <div className='quation'>
                <h3>How does react work?</h3>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='quation'>
                <h3>Why using useEffect in react besides fetching data?</h3>
                <ol>5 use cases of the useState ReactJS hook
                    <li>Running on state change: validating input field</li>
                    <li>Running on state change: live filtering</li>
                    <li>Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price</li>
                </ol>
            </div>
            <div className='quation'>
                <h3>What does different betWeen Props and state?</h3>
                <div>
                    <ol>Props: 
                        <li>Props are read-only.</li>
                        <li>Props are immutable.</li>
                        <li>Props can be accessed by the child component.</li>
                        <li>Props are used to communicate between components.</li>
                    </ol>
                    <ol> State:
                        <li>State changes can be asynchronous.</li>
                        <li>State is mutable.</li>
                        <li>State cannot be accessed by child components.</li>
                        <li>States can be used for rendering dynamic changes with the component.</li>
                    </ol>
                    </div>
            </div>
            
        </div>
    );
};

export default Quation;