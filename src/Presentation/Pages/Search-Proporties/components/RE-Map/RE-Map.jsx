import React from 'react';
import "./RE-Map.css";
import 'leaflet/dist/leaflet.css';

import { CircleMarker, MapContainer, Marker, Popup } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { red } from '@mui/material/colors';
import Card from '../../../Home/components/Card';
import DisplayCard from '../RE-Listing/RE-Card/RE-Card';

//^ RE == Real Estate
//^ this is a search page
const REMap = () => {
    return (
        <div id='map'>
            <MapContainer center={[33.5138, 36.2765]} zoom={13} style={{height:"100%"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[33.5138, 36.2765]}>
                    <Popup className='popup'>
                        <div style={{scale:'75%',justifySelf:'center'}}>
                            <DisplayCard/>
                        </div>
                
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default REMap;
