import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Test Test</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-items'>
                <CardItem 
                src="/hearts.gif"
                text="cat test"
                label="cat"
                // change path
                path='/' 
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
