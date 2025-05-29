import React from 'react';
import './Agent_property.css'
import Info from "../../../Search-Proporties/components/RE-Listing/RE-Card/RE-Card-Info.json"
import { useNavigate } from 'react-router-dom';

function AgentProperty () {
    const navigate=useNavigate();
    return (
        <div className='Agent-property-card' onClick={()=>{
            navigate('/Details');
        }}>
            <div className='Agent-property-pic'>
            </div>
            <div className='location-status'>{"كفرسوسة,شام سنتر"}
                <div className='property-status'>occupied</div>
            </div>
            <div className='info'>
                Tenat:Ward Ekhtiar
            </div>
            <button className='manage-button'>Manage Property</button>
        </div>);
}

export default AgentProperty;
