import React from 'react';
import "../Pages/Display_Page.css"
import Info from "./Display_Card_Info.json"

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
