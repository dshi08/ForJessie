import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function FoodieCards() {
  return (
    <div className='cards'>
      <h1>Foooooooood</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-items'>
                <CardItem 
                src="test_cat.jpeg"
                text="food test"
                label="not cat"
                path='/'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default FoodieCards
