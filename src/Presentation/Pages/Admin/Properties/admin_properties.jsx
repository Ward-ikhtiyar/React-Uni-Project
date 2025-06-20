import { useState,useEffect } from 'react';
import { getPendingProperties } from '../../../../API/admin_requests';
import './admin_main.css'
import Custom_Chip from '../../Profile/components/Chips/chip';
import DisplayCard from '../../Display/components/RE-Listing/RE-Card/RE-Card';
import { useNavigate } from 'react-router-dom';
function AdminProperties(){
    console.log(localStorage.getItem('token'));
    const[properties,setProperties]=useState([]);
    const[isLoading,setIsLoadoing]=useState(false);
    const[chipVal,setChipVal]=useState(0);
    const navigate=useNavigate();
 async function handleGetProperties(){
         setIsLoadoing(true);
         let fetchedProperties=await getPendingProperties(true);
         if (chipVal === 1) {
       fetchedProperties = fetchedProperties.filter(el => el.isForRent);
     } else if (chipVal === 2) {
       fetchedProperties = fetchedProperties.filter(el => !el.isForRent);
     } else if (chipVal === 3) {
       fetchedProperties = fetchedProperties.filter(el => !el.isForRent);
     }
         setProperties(fetchedProperties);
         console.log(chipVal);
         
         console.log(fetchedProperties);
         setIsLoadoing(false);
     } 
     useEffect(()=>{handleGetProperties();},[chipVal]);
    return(
        <div className="admin-info">
            <div className="admin-title">Properties</div>    
    <div className='admin-chips-row'>
                        <Custom_Chip title={"All"} index={0} val={chipVal} Click={()=>setChipVal(0)} />
                        <Custom_Chip title={"For Rent"} index={1} val={chipVal} Click={()=>setChipVal(1)}/>
                        <Custom_Chip title={"For sale"} index={2} val={chipVal} Click={()=>setChipVal(2)}/>

                    </div>
            <div className='admin-body'>
                    
                    {properties.map((property)=>(
                        <div onClick={()=>navigate(`/Admin/property?id=${property.id}`)}>
                            <DisplayCard property={property}/>
                        </div>
                        ))}
            </div>
        </div>
    );
}
export default AdminProperties;