import React from 'react'
import '../App.css';
import './love.css';
function AlbumHero() {
  return (
    <div className='love-container'>
      <video className='video-background'
            src='/videos/jessie.mov'
            autoPlay
            muted
            loop
            playsInline/>
            <div className='love-content'>
                <h1>Album</h1>
                <p>Welcome Jessie!</p>
            </div>
    </div>
  )
}

export default AlbumHero
