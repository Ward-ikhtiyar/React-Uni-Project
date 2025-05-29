
import './requests.css'
import { Edit,} from '@mui/icons-material';
import Custom_Chip from './components/Chips/chip';
import { useState } from 'react';
import Card from '../Home/components/Card';
import DisplayCard from '../Search-Proporties/components/RE-Listing/RE-Card/RE-Card';

function SavedPropertiesPage(){
    const[chipVal,setChipVal]=useState(0);
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
            <DisplayCard/>
            <DisplayCard/>
            <DisplayCard/>
            
            </div>
            
    </div>
);
}
export default SavedPropertiesPage