import React from 'react'
import '../App.css';
import './love.css';
function CatHero() {
  return (
    <div className='love-container'>
      <video className='video-background'
            src='/videos/cat.mp4'
            autoPlay
            muted
            loop
            playsInline/>
            <div className='love-content'>
                <h1>Cats</h1>
                <p>Many different breeds of cats</p>
            </div>
    </div>
  )
}

export default CatHero
