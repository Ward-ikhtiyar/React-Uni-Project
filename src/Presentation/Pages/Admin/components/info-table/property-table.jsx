import React from 'react';
import PropertyRow from '../info-row/properties-info-row.jsx';

const PropertyTable = ({ properties}) => {
  return (
    <div style={{ width: '100%' ,marginBottom:'40px' }}>
      <div
        style={{
          flexDirection:'row',
          justifyContent:'space-evenly',
          borderTopLeftRadius:'10px',
          borderTopRightRadius:'10px',
          backgroundColor:'white',
          display: 'flex',
          padding: '12px 16px',
          borderBottom: '2px solid var(--app-blue)',
          fontWeight: '600',
          color: 'var(--app-blue)',
          alignItems: 'center',
          fontSize: '1rem',
          userSelect: 'none',
        }}
      >
        <div >Image</div>
          <div >Price</div>
          <div >Rooms  </div>
          <div > Baths  </div>
          <div >Area</div>
          <div >Type</div>
          <div >Commerce</div>
          <div >Location</div>
          <div >Agency</div>
          <div >Owner</div>

      </div>

      {/* Rows */}
      {properties.map((property) => (
        <PropertyRow key={property.id} property={property}  />
      ))}
      {properties.map((property) => (
        <PropertyRow key={property.id} property={property}  />
      ))}
      {properties.map((property) => (
        <PropertyRow key={property.id} property={property}  />
      ))}
      {properties.map((property) => (
        <PropertyRow key={property.id} property={property}  />
      ))}
      {properties.map((property) => (
        <PropertyRow key={property.id} property={property}  />
      ))}
      {properties.map((property) => (
        <PropertyRow key={property.id} property={property}  />
      ))}
      {properties.map((property) => (
        <PropertyRow key={property.id} property={property}  />
      ))}
      {properties.map((property) => (
        <PropertyRow key={property.id} property={property}  />
      ))}
      
    </div>
  );
};

export default PropertyTable;
