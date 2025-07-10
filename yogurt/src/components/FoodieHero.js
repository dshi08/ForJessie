import React from 'react'
import '../App.css';
import './love.css';

function FoodieHero() {
  return (
    <div className='love-container'>
        <video 
         className='video-background'
         src="/videos/foodie.mov"
         autoPlay 
         loop 
         muted 
         playsInline 
         />
         <div className='love-content'>
            <h1>Restaurants</h1>
            <p>These are places we ate at together!</p>
         </div>
    </div>
  )
}

export default FoodieHero