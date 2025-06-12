import React, { useEffect, useState } from 'react';
import './Agent_property.css'
import Info from "../../../Display/components/RE-Listing/RE-Card/RE-Card-Info.json"
import { useNavigate } from 'react-router-dom';
import TokenAxios from '../../../../../API/tokenAxios';

function AgentProperty ({property,setOpen,setId}) {
    //   onClick={()=>{
    //         navigate('/Details');
    //     }}
    const navigate=useNavigate();
    
    return (
        <div className='Agent-property-card'>
                      <img className='Agent-property-pic' src={property.propertyImages?`http://localhost:3000/property/images/${property.propertyImages[0]}`:"public/assets/images/propertyPlaceholder.png"} crossOrigin="anonymous" />

            <div className='location-status'>{`${property.location.quarter} ,${property.location.street}`}
                <div className='property-status'>occupied</div>
            </div>
            <div className='info'>
                Tenat:Ward Ekhtiar
            </div>
            <button onClick={()=>{setOpen(true);setId(property.id)}} className='manage-button'>Manage Property</button>
        </div>);
}

export default AgentProperty;
