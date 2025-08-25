
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
          className='property-pic'
          crossOrigin='anonymous'
          alt="property"
        />
      </div>

      
        <div className='price'>{Number(property.price).toFixed(0)}$</div>

          <span>{property.rooms} beds</span>
          <span>{property.bathrooms} ba</span>
          <span>{property.area} sqft</span>
        

        <div style={{paddingRight:'20px'}} className='type'>
          {`${property.propertyType}`}
        </div>
        <div style={{paddingRight:'30px'}}  className='type'>
          {`${property.isForRent ? "Rent" : "Sale"}`}
        </div>

        <div className='location'>
          <LocationOnOutlined sx={{ color: 'var(--app-blue)', verticalAlign: 'middle' }} />
          <span>{`${property.location.city} | ${property.location.street}`}</span>
        </div>
        <span style={{paddingRight:'20px'}}>{property.bathrooms} ba</span>
          <span >{property.area} sqft</span>
      
    </div>
  );
};

export default PropertyRow;
