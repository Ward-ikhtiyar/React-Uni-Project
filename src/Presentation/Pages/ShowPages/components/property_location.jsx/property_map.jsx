import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import './property-map.css'
import 'leaflet/dist/leaflet.css';

function PropertyMap({location}){
    const personIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
    });

    return (
        <div className="property-map-main">
            <MapContainer center={[location.lat, location.lon]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[location.lat, location.lon]} >
                    <Popup>Property Location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default PropertyMap;