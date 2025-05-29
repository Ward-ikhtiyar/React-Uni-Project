import React from 'react';
import './RE-Card.css'
import Info from "./RE-Card-Info.json"
import { useNavigate } from 'react-router-dom';

const DisplayCard = () => {
    const navigate=useNavigate();
    return (
        <div className='property-card' onClick={()=>{
            navigate('/Details');
        }}>
            <div className='property-pic'>
            </div>
            <div className='price-favorite'>{Info.price}$
            </div>
            <div className='info'>
                {Info.beds} beds<hr></hr>
                {/* Nigga its bathrooms Nigga not balconIES NIGGER*/ }
                {Info.balconys} ba<hr></hr>
                {Info.sqft} sqft <hr></hr>
                House for sale
            </div>
            <div className='info'>{Info.city}
            </div>
        </div>);
}

export default DisplayCard;
