import React, { useState } from 'react';
import './RE-Card.css'
import Info from "./RE-Card-Info.json"
import { DeleteForeverOutlined, LocationOnOutlined, } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { setFavorite } from '../../../../../../API/requests';

const RE_Card = ({ property, isEditable,destination }) => {
    const handleClick = () => {
        if (isEditable === true) {
            setFavorite(property.id);
        }
        if (isEditable === false) {
            navigate(destination??`/Details?id=${property.id}`);

        }

    }
    const navigate = useNavigate();
    return (

        <div className='property-card' onClick={() => handleClick()}>
            <div    >
                <img onError={(e) => {
                    e.target.onerror = null
                    e.target.src = "public/assets/images/propertyPlaceholder.png"
                }} src={`http://localhost:3000/property/images/${property.firstImage}`} className='property-pic' crossOrigin='anonymous'>
                </img >
                {isEditable ? <CloseIcon className='remove-icon' /> : <div></div>}
            </div>

            <div className='price-favorite'>{property.price}$
            </div>
            <div className='info'>
                {property.rooms} beds<hr></hr>
                {/* Nigga its bathrooms Nigga not balconIES NIGGER*/}
                {property.bathrooms} ba<hr></hr>
                {property.area} sqft
            </div>
            <div style={{ color: 'var(--app-blue)', fontWeight: '500', alignSelf: 'start', marginLeft: '1.2vw' }}>
                {`${property.propertyType} for ${property.isForRent === true ? "Rent" : "sale"}`}
            </div>
            <div className='info'>
                <LocationOnOutlined sx={{ color: 'var(--app-blue)' }} />
                {`${property.location.city}|${property.location.street}`}
            </div>
        </div>);
}

export default RE_Card;
