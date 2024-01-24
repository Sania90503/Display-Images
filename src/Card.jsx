import React from 'react';
import Star from './Star.png'


export default function Card(props){
    
    return(
        <>
        <div className="card">
           <img src= {`./${props.img}`} alt="Card-Image" className='card--image' /> 
           <div className="card--status">
                    <img src={Star} alt="Star" className='star' />
            <span> {props.rating} </span><span className='gray'> ({props.reviewCount}) •  </span><span className='gray'>USA</span>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'> <b>From ${props.price} /</b> Person </p>
            </div>
        </div>
        </>
    )
}