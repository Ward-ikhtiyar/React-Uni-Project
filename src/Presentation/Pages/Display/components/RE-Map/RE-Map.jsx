import React from 'react';
import "./RE-Map.css";
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import DisplayCard from '../RE-Listing/RE-Card/RE-Card';
import { useProperty } from '../../../../../consts/context';
import MySnackbar from '../../../../components/snackBar/success_snack';

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

const REMap = ({ Listings, isAdd }) => {
    const { location, setLocation } = useProperty();
    
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
            </MapContainer>
            {isAdd?
                 <div style={{
      position: 'absolute',
      top: '0px',
      left: '20%',
      transform: 'translateX(-50%)',
      zIndex: 10
    }}>
                <MySnackbar open={true} title={"ward"}/>

                </div>
            
            :<div></div>}
        </div>
    );
}

export default REMap;