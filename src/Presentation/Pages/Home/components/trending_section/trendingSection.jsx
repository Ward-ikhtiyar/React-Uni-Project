import { useState,useEffect } from 'react';
import './trendingSection.css'
import { getAcceptedProperties, getTopVotedProperties } from '../../../../../API/requests';
import TrendingCard from '../trendingCard';
import { ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
function TrendingSection(){
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
        <div className='trending-main'>
            <div className='trending-title'>
                Popular
                <div id='check-more' className="colored-button"  onClick={()=>{
                console.log("ward");
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