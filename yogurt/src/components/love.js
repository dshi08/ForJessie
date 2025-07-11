import React from 'react'
import '../App.css';
import { Button } from './Button'
import './love.css';
import { useRef } from 'react';


function Love() {
  const audioRef = useRef(null);
  const playSound = () => {
    if(audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play()
    }
  }
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
          <audio ref={audioRef} src="/audio/meow.mp3" preload='auto' />
          <h1>Look what I made!!</h1>
          <p>16 hour project btw</p>
          <div className="love-btns">
            <Button 
              className='btns' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              onClick={playSound}
            >
              Click Me
              <img 
              className='icon'
              src="/heart.png" 
              alt="icon" 
              /> 
            </Button>
          </div>
        </div>
      </div>
    );
  }

export default Love
