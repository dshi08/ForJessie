import React from 'react'
import CardItem from './CardItem'

function AlbumCards() {
  return (
    <div className='cards'>
      <h1>Some photos together</h1>
      <div className='cards-container'>
       <div className='cards-wrapper'>
        <ul className='cards-items'>
         <CardItem 
            src="/album/img-1.jpg"
            label="Prom"
            text="Prom was fun"
            path='' 
         />
         <CardItem 
            src="/album/img-2.jpg"
            label="Hackathon"
            text="We WON"
            path='' 
         />
         <CardItem 
            src="/album/img-3.jpg"
            label="Prom"
            text="to-do"
            path='' 
         />
        </ul>
        <ul className='cards-items'>
         <CardItem 
            src="/album/img-4.jpg"
            label="Misc"
            text="HAHA"
            path='' 
         />
         <CardItem 
            src="/album/img-5.jpg"
            label="Prom"
            text="Last day sophomore year"
            path='' 
         />
         <CardItem 
            src="/album/img-6.jpg"
            label="Prom"
            text="Arjun's suggestion for a pose LOL"
            path='' 
         />
        </ul>
        <ul className='cards-items'>
         <CardItem 
            src="/album/img-7.jpg"
            label="Prom"
            text="My mom wanted this"
            path='' 
         />
         <CardItem 
            src="/album/img-8.jpg"
            label="Prom"
            text="I'm so tall"
            path='' 
         />
         <CardItem 
            src="/album/img-9.jpg"
            label="Prom"
            text="Your favorite photo from prom!"
            path='' 
         />
        </ul>
        <ul className='cards-items'>
         <CardItem 
            src="/album/img-10.jpg"
            label="Prom"
            text="Nonchalant fr"
            path='' 
         />
         <CardItem 
            src="/album/img-11.jpg"
            label="Prom"
            text="I won't forget Claire's scam 😡"
            path='' 
         />
         <CardItem 
            src="/album/img-12.jpg"
            label="School"
            text="Luke cooked this play fr"
            path='' 
         />
        </ul>
        <ul className='cards-items'>
         <CardItem 
            src="/album/img-13.jpg"
            label="Halloween"
            text="Halloween Chipotle run again?"
            path='' 
         />
         <CardItem 
            src="/album/img-14.jpg"
            label="Halloween"
            text="this was fun too (we forgot them lol)"
            path='' 
         />
         <CardItem 
            src="/album/img-15.png"
            label="Misc"
            text="heehee"
            path='' 
         />
        </ul>
        <ul className='cards-items'>
         <CardItem 
            src="/album/img-16.jpg"
            label="Misc"
            text="We should go back to the mall this summer"
            path='' 
         />
         <CardItem 
            src="/album/img-17.jpg"
            label="Misc"
            text="Do you still have the flowers? 😍"
            path='' 
         />
         <CardItem 
            src="/album/img-18.jpg"
            label="School"
            text="First photo together"
            path='' 
         />
        </ul>
       </div>
      </div>
    </div>
  )
}

export default AlbumCards
