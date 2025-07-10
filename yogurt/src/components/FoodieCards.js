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
                src="/foodies/karma.jpeg"
                text="Karma"
                label="Andover"
                path='https://www.karmaandover.com/'
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/foodies/akita_ramen.webp"
                text="Akita Ramen"
                label="Andover"
                path='https://akita-ramen.com/'
                />
                <CardItem 
                src="/foodies/mcdonald's.webp"
                text="McDonald's"
                label="Andover"
                path='https://www.mcdonalds.com/us/en-us.html'
                />
                <CardItem 
                src="/foodies/dunkin.jpg"
                text="Dunkin"
                label="Andover + Medford"
                path='https://www.dunkindonuts.com/en'
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/foodies/raising_canes.webp"
                text="Raising Canes"
                label="Methuen + Boston"
                path='https://locations.raisingcanes.com/ma/methuen'
                />
                <CardItem 
                src="/foodies/chick-fil-a.jpg"
                text="Chick-fil-A"
                label="Boston"
                path='https://chickfilacopleysquare.com/'
                />
                <CardItem 
                src="/foodies/crumbl.jpg"
                text="Crumbl Cookie"
                label="Methuen"
                path='https://crumblcookies.com/stores/ma/methuen'
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/foodies/olive_garden.jpg"
                text="Olive Garden"
                label="Methuen"
                path='https://www.olivegarden.com/locations/ma/methuen/methuen/1825'
                />
                <CardItem 
                src="/foodies/malatang.png"
                text="YGF MalaTang"
                label="Boston"
                path='https://www.ygfmalatangca.com/'
                />
                <CardItem 
                src="/foodies/happylamb.jpg"
                text="Happy Lamb Hot Pot"
                label="Boston"
                path='https://happylambhotpot.com/'
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/foodies/chipotle.png"
                text="Chipotle"
                label="North Andover + Salem NH"
                path='https://locations.chipotle.com/nh/salem/12-s-village-dr'
                />
                <CardItem 
                src="/foodies/dave's_hot_chicken.webp"
                text="Dave's Hot Chicken (poor Brian)"
                label="Chelmsford"
                path='https://restaurants.daveshotchicken.com/ma/chelmsford/hot-chicken-sandwich-on-drum-hill-rd/'
                />
                <CardItem 
                src="/foodies/starbucks.jpg"
                text="Starbucks"
                label="Andover + Boston"
                path='https://www.starbucks.com/'
                />
            </ul>
            <ul className='cards-items'>
                <CardItem 
                src="/foodies/maki_maki.jpg"
                text="Maki Maki"
                label="Woburn"
                path='https://locations.chipotle.com/nh/salem/12-s-village-dr'
                />
                <CardItem 
                src="/foodies/windsor_dim_sum.jpg"
                text="Windsor Dim Sum (with your sister)"
                label="Boston"
                path='https://winsor-dim-sum-cafe.foodjoyy.com/'
                />
                <CardItem 
                src="/foodies/chicha_san_chen.webp"
                text="CHICHA San Chen"
                label="Boston"
                path='https://www.chichasanchen.com/en/'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default FoodieCards
