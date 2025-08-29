import React, { useEffect, useState } from 'react';
import './Agent_property.css'
import Info from "../../../Search-Proporties/components/RE-Listing/RE-Card/RE-Card-Info.json"
import { useNavigate } from 'react-router-dom';
import TokenAxios from '../../../../../API/tokenAxios';

function AgentProperty ({setProperty,property,setOpen,setId}) {
    //   onClick={()=>{
    //         navigate('/Details');
    //     }}
    const navigate=useNavigate();
    
    return (
        <div className='Agent-property-card'>
                      <img   onError={(e) => {
    e.target.onerror = null; 
    e.target.src = "public/assets/images/propertyPlaceholder.png";
  }}  className='Agent-property-pic' src={`http://localhost:3000/property/images/${property.firstImage}`} crossOrigin="anonymous" />

            <div className='location-status'>{`${property.location.quarter} ,${property.location.street}`}
                <div className='colored-button' style={{paddingLeft:'20px',paddingRight:'20px',marginLeft:'10px',marginRight:'10px',backgroundColor:property.status==="pending"?"var(--app-grey)":property.status==="accepted"?"var(--app-blue)":"var(--app-red)"}} >{property.status}</div>
            </div>
            <div className='info'>
                Tenat:Ward Ekhtiar
            </div>
            <button onClick={()=>{setOpen(true);setProperty(property)}} className='manage-button'>Manage Property</button>
        </div>);
}

export default AgentProperty;
