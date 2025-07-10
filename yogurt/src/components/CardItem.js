import React from 'react'
import {Link} from 'react-router-dom'
function CardItem(props) {

 const isExternal = props.path.startsWith('http');
  return (
    <>
      <li className='cards-item'>
        {isExternal ? (
            <a href={props.path} 
                className='cards-item-link' 
                target="_blank"
                rel="noopener noreferrer">
                <figure className='cards-item-pic-wrap' data-category={props.label}> 
                    <img src={props.src} alt="4Jessie" className='cards-item-img'/>
                </figure>
            <div className="cards-item-info">
                <h5 className="cards-item-text">
                    {props.text}
                </h5>
            </div>
            </a>
        ) : (
        <Link className='cards-item-link' to={props.path}>
         <figure className='cards-item-pic-wrap' data-category={props.label}> 
            <img src={props.src} alt="4Jessie" className='cards-item-img'/>
         </figure>
         <div className="cards-item-info">
            <h5 className="cards-item-text">
                {props.text}
            </h5>
         </div>
        </Link>
        )}
      </li>
    </>
  )
}

export default CardItem
