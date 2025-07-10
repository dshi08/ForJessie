import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function CatCards() {
  return (
    <div className='cards'>
      <h1>Look at these cute cats</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-items'>
                <CardItem 
                src="/cats/persian_cat.jpg"
                text="This cats pretty quirky"
                label="Persian"
                // change path
                path='/' 
                />
                <CardItem 
                src="/cats/ragdoll_cat.jpeg"
                text="This cat doesn't go outside bro"
                label="Ragdoll"
                // change path
                path='/' 
                />
                <CardItem 
                src="/cats/white_cat.jpg"
                text="Spot the cat challenge (impossible)"
                label="White"
                // change path
                path='/' 
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/cats/black_cat.jpeg"
                text="I wish cars were real"
                label="Black"
                // change path
                path='/' 
                />
                <CardItem 
                src="/cats/marmar.jpg"
                text="Its Marmar"
                label="Orange"
                // change path
                path='/' 
                />
                <CardItem 
                src="/cats/british_shorthair_cat.jpeg"
                text="I think this is Zach P's cat"
                label="British Shorthair"
                // change path
                path='/' 
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/cats/maine_coon_cat.jpg"
                text="Sooooo fluffy"
                label="Maine Coon"
                // change path
                path='/' 
                />
                <CardItem 
                src="/cats/siamese_cat.jpg"
                text="This cat is working their angles man"
                label="Siamese"
                // change path
                path='/' 
                />
                <CardItem 
                src="/cats/tuxedo_cat.jpg"
                text="It's Milky ! :D"
                label="Tuxedo Cat"
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
