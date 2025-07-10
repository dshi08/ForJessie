import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function FoodieCards() {
  return (
    <div className='cards'>
      <h1> Every place we've eaten at together</h1>
      <div className='cards-container'>
        <div className='cards-wrapper'>
            <ul className='cards-items'></ul>
            <ul className='cards-items'>
                <CardItem 
                src="/foodies/gati_thai_bistro.png"
                text="Gati Thai Bistro (first date)"
                label="Andover"
                path='https://lineardesign.com/wp-content/uploads/2019/06/out-of-business.gif'
                />
                <CardItem 
                src="/foodies/kokoro_udon.webp"
                text="Kokoro Craft Udon"
                label="Andover"
                path='https://kokorocraftudon.com/'
                />
                <CardItem 
                src="/foodies/pazzos_pizza.webp"
                text="Pazzo Pizza"
                label="Andover"
                path='https://lineardesign.com/wp-content/uploads/2019/06/out-of-business.gif'
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/foodies/casa_blanca.webp"
                text="Casa Blanca"
                label="Andover"
                path='https://casablancasrestaurant.com/andover-casa-blanca-mexican-restaurant-food-menu'
                />
                <CardItem 
                src="/foodies/otto.webp"
                text="OTTO"
                label="Andover"
                path='https://order.ottoportland.com/order/otto-portland-andover-main-st'
                />
                <CardItem 
                src="/foodies/uburger.webp"
                text="Uburger"
                label="Andover"
                path='https://uburger.com/'
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/foodies/brooksy's.webp"
                text="Brooksy's"
                label="Andover"
                path='https://www.brooksyspizza.com/'
                />
                <CardItem 
                src="/foodies/d'agostino's.webp"
                text="D'agostino's (my fav)"
                label="Andover"
                path='https://dagsdeli.com/'
                />
                <CardItem 
                src="test_cat.jpeg"
                text="food test"
                label="not cat"
                path='/'
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="test_cat.jpeg"
                text="food test"
                label="not cat"
                path='/'
                />
                <CardItem 
                src="test_cat.jpeg"
                text="food test"
                label="not cat"
                path='/'
                />
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
