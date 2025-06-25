
import './requests.css'
import { Add,} from '@mui/icons-material';
import Custom_Chip from './components/Chips/chip';
import { useEffect, useState } from 'react';
import Card from '../Home/components/Card';
import DisplayCard from '../Search-Proporties/components/RE-Listing/RE-Card/RE-Card';
import AgentProperty from './components/myProperty_card/Agent_property';
import CreatePropertyDialog from '../../components/Dialogs/CreateProperty_Dialog';
import AddPropertyPage from './AddProperty/addProperty';
import { getAcceptedProperties } from '../../../API/requests';
import ManagePropertyDialog from '../../components/Dialogs/manage_property_dialog';
import { div } from 'framer-motion/client';
function PropertiesPage(){
    const[chipVal,setChipVal]=useState(0);
    const[open,setOpen]=useState(false);
    const [id,setId]=useState(0);
        const[dialog,setDialog]=useState(false);
    const [selectedProperty,setSelectedProperty]=useState({});
    const [loading,setIsLoadoing]=useState(false);
    const [properties,setProperties]=useState([]);
    async function handleGetProperties(){
        setIsLoadoing(true);
        let fetchedProperties=await getAcceptedProperties(true);
        if (chipVal === 1) {
      fetchedProperties = fetchedProperties.filter(el => el.status === "pending");
    } else if (chipVal === 2) {
      fetchedProperties = fetchedProperties.filter(el => el.status === "accepted");
    }
        setProperties(fetchedProperties);
        console.log(chipVal);
        
        console.log(fetchedProperties);
        setIsLoadoing(false);
    } 
    useEffect(()=>{handleGetProperties();},[chipVal]);

if(!open){
return(
<div className="profile-info" >
        <div className="requests-title">
            Properties
            <button className='colored-button' onClick={()=>setOpen(true)}><Add /> Add a property</button>
        </div>

        <div className='chips-row'>
            <Custom_Chip Click={setChipVal} title={"All"}  index={0} val={chipVal}/>
            <Custom_Chip Click={setChipVal} title={"Pending"}  index={1} val={chipVal}/>            
            <Custom_Chip Click={setChipVal} title={"Accepted"}  index={2} val={chipVal}/>
        </div>

        <div className='profile-body'>
            {properties.map((element,index)=><AgentProperty setProperty={setSelectedProperty} setId={setId} setOpen={setDialog} key={index} property={element}/>)}
        </div>
        {
           dialog? <ManagePropertyDialog property={selectedProperty} setOpen={setOpen} id={id} open={dialog} onClosee={()=>setDialog(false)}/>:<div></div>
        }
                  
</div>  
);}
if(open){
    return(
        <AddPropertyPage open={open} setOpen={setOpen}/>
    );
}

}
export default PropertiesPage;