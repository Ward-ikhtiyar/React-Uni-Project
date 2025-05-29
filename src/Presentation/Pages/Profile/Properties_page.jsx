
import './requests.css'
import { Add,} from '@mui/icons-material';
import Custom_Chip from './components/Chips/chip';
import { useState } from 'react';
import Card from '../Home/components/Card';
import DisplayCard from '../Display/components/RE-Listing/RE-Card/RE-Card';
import AgentProperty from './components/myProperty_card/Agent_property';
function PropertiesPage(){
    const[chipVal,setChipVal]=useState(0);
return(
    <div className="profile-info" >
        <div className="requests-title">
            Properties
            <button className='colored-button'><Add /> Add a property</button>
        </div>

        <div className='chips-row'>
            <Custom_Chip Click={setChipVal} title={"All"}  index={0} val={chipVal}/>
            <Custom_Chip Click={setChipVal} title={"Vacant"}  index={1} val={chipVal}/>            
            <Custom_Chip Click={setChipVal} title={"Occupied"}  index={2} val={chipVal}/>
        </div>

        <div className='profile-body'>
            <AgentProperty/>
            <AgentProperty/>
            <AgentProperty/>
            </div>
            
    </div>
);
}
export default PropertiesPage