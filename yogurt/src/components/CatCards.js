import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function CatCards() {
  return (
    <div className='cards'>
      <h1>Look at these cats</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-items'>
                <CardItem 
                src="/test_cat.jpeg"
                text="cat test"
                label="cat"
                // change path
                path='/' 
                />
                <CardItem 
                src="/test_cat.jpeg"
                text="cat test"
                label="cat"
                // change path
                path='/' 
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/test_cat.jpeg"
                text="cat test"
                label="cat"
                // change path
                path='/' 
                />
                <CardItem 
                src="/test_cat.jpeg"
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

export default CatCards
