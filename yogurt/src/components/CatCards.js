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
                path='https://www.youtube.com/watch?v=nXWKDQSnc5M' 
                />
                <CardItem 
                src="/cats/ragdoll_cat.jpeg"
                text="This cat doesn't go outside bro"
                label="Ragdoll"
                // change path
                path='https://www.youtube.com/watch?v=Qk_cx35WLLA' 
                />
                <CardItem 
                src="/cats/white_cat.jpg"
                text="Spot the cat challenge (impossible)"
                label="White"
                // change path
                path='https://www.youtube.com/watch?v=jvt5IY-mTcs' 
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/cats/black_cat.jpeg"
                text="I wish cars were real"
                label="Black"
                // change path
                path='https://www.youtube.com/watch?v=hWR5zrji7LQ' 
                />
                <CardItem 
                src="/cats/marmar.jpg"
                text="Its Marmar"
                label="Orange"
                // change path
                path='https://www.tiktok.com/@orange.cat899/video/7474926470796741934'
                />
                <CardItem 
                src="/cats/british_shorthair_cat.jpeg"
                text="I think this is Zach P's cat"
                label="British Shorthair"
                // change path
                path='https://www.youtube.com/watch?v=6PFD4oF39hk&pp=0gcJCfwAo7VqN5tD' 
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/cats/maine_coon_cat.jpg"
                text="Sooooo fluffy"
                label="Maine Coon"
                // change path
                path='https://www.youtube.com/watch?v=aRBskigaX1I' 
                />
                <CardItem 
                src="/cats/siamese_cat.jpg"
                text="This cat is working their angles man"
                label="Siamese"
                // change path
                path='https://www.youtube.com/watch?v=MSfHqLqo4Yg' 
                />
                <CardItem 
                src="/cats/tuxedo_cat.jpg"
                text="It's Milky ! :D"
                label="Tuxedo Cat"
                // change path
                path='https://www.tiktok.com/@funnycats0ftiktok/video/7354754829836733738?lang=en' 
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default CatCards
