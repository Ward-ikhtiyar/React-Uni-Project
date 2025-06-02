import React from 'react';
import './TrendingCard.css';
import { FavoriteBorderOutlined, LocalFireDepartment } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const TrendingCard = ({ property }) => {
const navigate=useNavigate();

  return (
    <div className="trending-card" onClick={()=>{navigate(`/Details?id=${property.id}`)}}>
        
            <img className='trendingCard-pic' style={{borderRadius:"24px",width:'250px',height:'150px',objectFit:'cover',boxShadow:'1px 1px 3px grey'}} src={!property.firstImage?"assets/images/propertyPlaceholder.png":`http://localhost:3000/property/images/${property.firstImage}`} crossOrigin='anonymous' />
        
      <div className="popular-tag">
        <LocalFireDepartment sx={{scale:'60%'}}/>
        Popular
       </div>
      <div className="property-info">
        <div className="property-title">
          {`${property.location.quarter} | ${property.location.street}`}
          <div className='favorite-circle'>
                <FavoriteBorderOutlined sx={{color:'var(--app-blue)',scale:'80%'}}/>
            </div>
          </div>
        <div className="price-section">
          <div>
            <span className="price">{"SYP "}{property.price}</span>
          <span className="period">{"/month"}</span>
          </div>
          
          <div className="property-type">{property.isForRent?"For Rent":" For Sale"}</div>
        </div>
        
        
      </div>
    </div>
  );
};

TrendingCard.defaultProps = {
  property: {
    title: 'Amall House | Nairobi West',
    price: 'Ksh 20,000',
    period: 'month',
    type: 'Rental'
  }
};

export default TrendingCard;