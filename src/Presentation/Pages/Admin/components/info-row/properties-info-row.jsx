
import './properties-info-row.css';
import CloseIcon from '@mui/icons-material/Close';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';

import { useNavigate } from 'react-router-dom';
const PropertyRow = ({ property}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    
      navigate(`/Details?id=${property.id}`);
    
  };

  return (
    <div className='property-row' onClick={handleClick}>
      <div className='property-pic-wrapper'>
        <img
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "public/assets/images/propertyPlaceholder.png";
          }}
          src={`http://localhost:3000/property/images/${property.firstImage}`}
          className='admin-property-pic'
          crossOrigin='anonymous'
          alt="property"
        />
      </div>

      
        <div className='price'>{Number(property.price).toFixed(0)}$</div>

          <span className='cell'  >{property.rooms} beds</span>
          <span className='cell' >{property.bathrooms} ba</span>
          <span className='cell' >{property.area} sqft</span>
        

  
        <div   className='type'>
          {`${property.propertyType}`}
        </div>
        <div    className='type'>
          {`${property.isForRent ? "Rent" : "Sale"}`}
        </div>

        <div  className='location'>
          <LocationOnOutlined sx={{ color: 'var(--app-blue)', verticalAlign: 'middle' }} />
          <span className='cell'>{`${property.location.city} | ${property.location.street}`}</span>
        </div>
        <span className='cell' >{property.bathrooms} ba</span>
          <span className='cell' >{property.agency.username} sqft</span>
      
    </div>
  );
};

export default PropertyRow;
