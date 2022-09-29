import  { useEffect, useState } from 'react';
import './App.css';
import Activities from './component/activities/Activities';
import Cart from './component/cart/Cart';

function App() {
  const [activities, setActivities] = useState([]);

        useEffect(()=>{
          fetch('data.json')
          .then(res => res.json())
          .then(data => setActivities(data));
        },[]);
        // console.log(activities);
  const handleAddToCart = (activity)=>{
    console.log(activity);
  }
  return (
    <div className='App'>
      <div className="card-container">
            <h1> <img src="logo.jpg" alt="" /> Kids Activity Club</h1>
            <Activities activities={activities} handleAddToCart={handleAddToCart}></Activities>
            
            </div>
        <Cart></Cart>
    </div>
  );
}

export default App;
