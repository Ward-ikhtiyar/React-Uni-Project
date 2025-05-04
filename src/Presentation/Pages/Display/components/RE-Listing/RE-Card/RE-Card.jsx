import React from 'react';
import './RE-Card.css'
import Info from "./RE-Card-Info.json"

const DisplayCard = () => {
    return (
        <div className='property-card'>
            <div className='property-pic'>
            </div>
            <div className='price-favorite'>{Info.price}$
            </div>
            <div className='info'>
                {Info.beds} beds<hr></hr>
                {Info.balconys} ba<hr></hr>
                {Info.sqft} sqft <hr></hr>
                House for sale
            </div>
            <div className='info'>{Info.city}
            </div>
        </div>);
}

export default DisplayCard;
