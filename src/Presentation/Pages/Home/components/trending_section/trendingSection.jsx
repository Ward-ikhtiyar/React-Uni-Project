import { useState,useEffect } from 'react';
import './trendingSection.css'
import { getAcceptedProperties, getTopVotedProperties } from '../../../../../API/requests';
import TrendingCard from '../trendingCard';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function TrendingSection(){

            const property = {
  title: "بيت الأحلام",
  description: "منزل جميل مع كل وسائل الراحة الحديثة، قريب من كل الخدمات.",
  isForRent: true,
  price: 1500,
  pointsDto: {
    lat: 30.0444,
    lon: 31.2357,
  },
  rooms: 3,
  bathrooms: 2,
  area: 120,
  floorNumber: 1,
  hasGarage: true,
  hasGarden: true,
  heatingType: "Gas",
  flooringType: "Wood",
  propertyType: "House",
  isFloor: false,
  agencyId: 2,
  propertyImages: [
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
  ],
  location: {
    country: "Egypt",
    governorate: "Cairo",
    city: "Cairo",
    quarter: "Zamalek",
    street: "El-Gezira St.",
    lat: 30.0444,
    lon: 31.2357,
  },
  voteScore: 4.5,
  viewCount: 123,
  user: {
    id: 1,
    username: "AhmedAli",
    profileImage: "https://picsum.photos/50/50?random=1",
  },
};
        const{t}=useTranslation();
        const navigate=useNavigate();
        const[Listings,setListings]=useState([property,property,property,property,property,property,property,property,property]);
        async function handleGetProperties(){
            console.log('top get properties exectured')
            let fetchedProperties=await getTopVotedProperties();
        }
        useEffect(()=>{
            handleGetProperties();
        },[]);



    return(
        <div className='trending-main sec-con-center'>
            <div className='trending-title'>
                {t('topVotedProps')}
                <div id='check-more' style={{display:'flex', flexDirection:'row', justifyContent:'space-around',marginRight:'50px',marginLeft:'50px'}} className="colored-button"  onClick={()=>{
                console.log("ward");
                navigate('/Properties');}}>
                    {t('more')}
                    {localStorage.getItem('lang')=='en'?<ArrowForward/>:<ArrowBack/>}
                    </div>
            </div>
            <div className='trending-props'>
                {Listings.map((element,index)=>(
                            <TrendingCard property={element}/>
                ))}
            </div>
        </div>
    );
}
export default TrendingSection