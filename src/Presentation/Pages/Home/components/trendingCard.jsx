import React from 'react';
import './TrendingCard.css';
import { FavoriteBorder, FavoriteBorderOutlined, LocalFireDepartment } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import TokenAxios from '../../../../API/tokenAxios';
import EndPoints from '../../../../API/endpoints';
import { setFavorite } from '../../../../API/requests';
import { isFavorite } from '../../../../API/requests';
import { useState } from 'react';
const TrendingCard = ({ property }) => {
const navigate=useNavigate();
  const [isAFavorite,setIsFavorite]=useState(false);

  async function handleSetfavorite(){
          await setFavorite(property.id);
          console.log("wardeeeeeee");
          const fetchisFavorite=await isFavorite(property.id);
          setIsFavorite(fetchisFavorite);
      }
  return (
    <div className="trending-card" >
        <div onClick={()=>{navigate(`/Details?id=${property.id}`)}}>
            <img className='trendingCard-pic' style={{borderRadius:"24px",width:'250px',height:'150px',objectFit:'cover',boxShadow:'1px 1px 3px grey'}} src={!property.firstImage?"assets/images/propertyPlaceholder.png":`http://localhost:3000/property/images/${property.firstImage}`} crossOrigin='anonymous' />

        </div>
        
      <div className="popular-tag">
        <LocalFireDepartment sx={{scale:'60%'}}/>
        Popular
       </div>
      <div className="property-info">
        <div className="property-title">
          {`${property.location.quarter} | ${property.location.street}`}
          <div className='favorite-circle' onClick={()=>{setFavorite(property.id);console.log("wardekr");}}>
               { isAFavorite===true? <FavoriteBorderOutlined  sx={{color:'var(--app-blue)',scale:'80%'}}/>:<FavoriteBorder/>}
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