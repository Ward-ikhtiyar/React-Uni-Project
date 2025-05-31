import React from 'react';
import './RE-Card.css'
import Info from "./RE-Card-Info.json"
import { LocationOnOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const DisplayCard = ({property}) => {
    const navigate=useNavigate();
        let isPlaceHolder=property.firstImage==="https://cdn-icons-png.flaticon.com/512/4757/4757668.png"
    return (

        <div className='property-card' onClick={()=>{
            navigate(`/Details?id=${property.id}`);
        }}>
            <img src={!property.firstImage?"assets/images/propertyPlaceholder.png":`http://localhost:3000/property/images/${property.firstImage}`} className='property-pic' crossOrigin='anonymous'>
            </img >
            <div className='price-favorite'>{property.price}$ 
            </div>
            <div className='info'>
                {property.rooms} beds<hr></hr>
                {/* Nigga its bathrooms Nigga not balconIES NIGGER*/ }
                {property.bathrooms} ba<hr></hr>
                {property.area} sqft
            </div>
            <div style={{color:'var(--app-blue)', fontWeight:'500',alignSelf:'start',marginLeft:'1.2vw'}}> House for sale</div>
            <div className='info'>
                <LocationOnOutlined sx={{color:'var(--app-blue)'}}/>
                {`${property.location.city}|${property.location.street}`}
            </div>
        </div>);
}

export default DisplayCard;
