import { useState,useEffect } from 'react';
import './trendingSection.css'
import { getAcceptedProperties, getTopScoreProperties } from '../../../../../API/requests';
import TrendingCard from '../trendingCard';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
function TrendingSection(){
        const navigate=useNavigate();
        const[Listings,setListings]=useState([]);
        async function handleGetProperties(){
            let fetchedProperties=await getTopScoreProperties();
            console.log('reached the trending props')
            setListings(fetchedProperties);
        }
        useEffect(()=>{
            handleGetProperties();
        },[]);
    return(
        <div className='trending-main sec-con-center'>
            <div className='trending-title'>
                Popular
                <div id='check-more' className="colored-button"  onClick={()=>{
                navigate('/Properties');}}>
                    Show more
                    <ArrowForward/>
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