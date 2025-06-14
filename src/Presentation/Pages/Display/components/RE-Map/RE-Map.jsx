import React, { useEffect,useState } from 'react';
import "./RE-Map.css";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import DisplayCard from '../RE-Listing/RE-Card/RE-Card';
import { useProperty } from '../../../../../consts/context';
import LocationSnackBar from '../../../../components/snackBar/location_snackBar';

function LocationMarker({ onClickMap }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      console.log({ lat, lng });
      onClickMap({ lat, lng }); 
    }
  });

  return null; 
}
function UserLocationMarker({ setUserLocation, location }) {
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newLoc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        console.log(newLoc);
        setUserLocation(newLoc);
        map.flyTo([newLoc.lat, newLoc.lng], 13);
      },
      (error) => {
        console.error('Geolocation error:', error);
      }
    );
  }, [map, setUserLocation]);

  if (!location.lat || !location.lng) return null;

  const personIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <Marker position={[location.lat, location.lng]} icon={personIcon}>
      <Popup>Your Location</Popup>
    </Marker>
  );
}

const REMap = ({ Listings, isAdd }) => {
    const { location, setLocation } = useProperty();
    const [userLocation,setUserLocation]=useState({lat:0,lng:0});
   
    return (
        <div id='map' style={{height:isAdd?'100vh':'90vh',}}>
            <MapContainer center={[33.5138, 36.2765]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {isAdd ? (
                    <>
                        <LocationMarker onClickMap={setLocation}/>
                        {location && <Marker position={[location.lat, location.lng]} />}
                    </>
                ) : (
                    Listings && Listings.map((property, index) => (
                        <Marker key={index} position={[property.location.lat, property.location.lon]}>
                            <Popup className='popup'>
                                <div style={{ scale: '75%', justifySelf: 'center' }}>
                                    <DisplayCard property={property}/>
                                </div>
                            </Popup>
                        </Marker>
                    ))
                )}
                <UserLocationMarker location={userLocation} setUserLocation={setUserLocation}/>
            </MapContainer>
            {isAdd?
                 <div style={{
      position: 'absolute',
      top: '0px',
      left: '20%',
      transform: 'translateX(-50%)',
      zIndex: 10
    }}>
                <LocationSnackBar open={true} title={"ward"}/>

                </div>
            
            :<div></div>}
        </div>
    );
}

export default REMap;