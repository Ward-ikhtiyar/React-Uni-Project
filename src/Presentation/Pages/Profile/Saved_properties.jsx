
import './requests.css'
import { Edit,} from '@mui/icons-material';
import Custom_Chip from './components/Chips/chip';
import { useState,useEffect } from 'react';
import Card from '../Home/components/Card';
import DisplayCard from '../Display/components/RE-Listing/RE-Card/RE-Card';
import { getFavorites } from '../../../API/requests';
function SavedPropertiesPage(){
    const[chipVal,setChipVal]=useState(0);
    const[Listings,setListings]=useState([]);
        async function handleGetProperties(){
            let fetchedProperties=await getFavorites();
            setListings(fetchedProperties);
        }
        useEffect(()=>{
            handleGetProperties();
        },[]);
    console.log(Listings);
return(
    <div className="profile-info" >
        <div className="requests-title">
            Archived
            <button className='colored-button'><Edit /> Edit</button>
        </div>

        <div className='chips-row'>
            <Custom_Chip Click={setChipVal} title={"All"}  index={0} val={chipVal}/>
            <Custom_Chip Click={setChipVal} title={"Rent"}  index={1} val={chipVal}/>            
            <Custom_Chip Click={setChipVal} title={"For Sale"}  index={2} val={chipVal}/>
        </div>

        <div className='profile-body'>
          {Listings.map((element,index)=>(<DisplayCard key={index} property={element.property}/>))}
            
            </div>
            
    </div>
);
}
export default SavedPropertiesPage