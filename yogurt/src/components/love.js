import React from 'react'
import '../App.css';
import { Button } from './Button'
import './love.css';

function love() {
    return (
      <div className='love-container'>
        {/* Video Background */}
        <video 
          className='video-background' 
          src="/videos/cat.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
        
        {/* Content Overlay */}
        <div className='love-content'>
          <h1>Look what I made!!</h1>
          <p>15 hour project btw</p>
          <div className="love-btns">
            <Button 
              className='btns' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              Click Me
            </Button>
          </div>
        </div>
      </div>
    );
  }

export default love
