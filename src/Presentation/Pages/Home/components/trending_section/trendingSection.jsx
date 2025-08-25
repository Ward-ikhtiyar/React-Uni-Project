import { useState,useEffect } from 'react';
import './trendingSection.css'
import { getAcceptedProperties, getTopVotedProperties } from '../../../../../API/requests';
import TrendingCard from '../trendingCard';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function TrendingSection(){
        const{t}=useTranslation();
        const navigate=useNavigate();
        const[Listings,setListings]=useState([]);
        async function handleGetProperties(){
            
            let fetchedProperties=await getTopVotedProperties();
            setListings(fetchedProperties);
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