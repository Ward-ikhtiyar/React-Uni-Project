import React from 'react';
import "./RE-Map.css";
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';


const REMap = () => {
    return (
        <div id='map'>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default REMap;
