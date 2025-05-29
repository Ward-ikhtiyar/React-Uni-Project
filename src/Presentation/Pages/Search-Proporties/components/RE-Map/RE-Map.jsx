import React from 'react';
import "./RE-Map.css";
import 'leaflet/dist/leaflet.css';

import { CircleMarker, MapContainer, Marker, Popup } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { red } from '@mui/material/colors';

//^ RE == Real Estate
//^ this is a search page
const REMap = () => {
    return (
        <div id='map'>
            <MapContainer center={[33.51467732448777, 36.27629567376125]} zoom={13} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <CircleMarker center={[33.51467732448777, 36.27629567376125]} pathOptions={{color: "red"}} radius={10} >
                    <Popup>
                        hellor world
                    </Popup>
                </CircleMarker>
                <Marker position={[33.51467732448777, 36.27629567376125]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default REMap;
