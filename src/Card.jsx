import React from 'react';
import Star from './Star.png'


export default function Card(props){
   
    let badgeText ; 
    if(props.openSpots===0){
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online"){
        badgeText="ONLINE"
    }

    return(
        <>
        <div className="card">           
           {badgeText && <div className="card--badge">{badgeText}</div>}
           <img src= {`./${props.coverImg}`} alt="Card-Image" className='card--image' /> 
           <div className="card--status">
                    <img src={Star} alt="Star" className='star' />
            <span> {props.stats.rating} </span><span className='gray'> ({props.stats.reviewCount}) •  </span><span className='gray'>USA</span>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'> <b>From ${props.price} /</b> Person </p>
            </div>
        </div>
        </>
    )
}
