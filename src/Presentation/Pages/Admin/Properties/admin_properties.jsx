import { useState,useEffect } from 'react';
import { getPendingProperties } from '../../../../API/admin_requests';
import './admin_main.css'
import Custom_Chip from '../../Profile/components/Chips/chip';
import { useNavigate } from 'react-router-dom';
import RE_Card from '../../Search-Proporties/components/RE-Listing/RE-Card/RE-Card';
function AdminProperties(){
    console.log(localStorage.getItem('token'));
    const[properties,setProperties]=useState([]);
    const[isLoading,setIsLoadoing]=useState(false);
    const[chipVal,setChipVal]=useState(0);
    const navigate=useNavigate();
 async function handleGetProperties(){
  
         setIsLoadoing(true);
         let fetchedProperties=await getPendingProperties();
         if (chipVal === 0) {
       fetchedProperties = !isSuperAdmin ? fetchedProperties : fetchedProperties.filter(el => el.status==="pending");
     } else if (chipVal === 1) {
       fetchedProperties = !isSuperAdmin ? fetchedProperties.filter(el => el.isForRent) : fetchedProperties.filter(el => el.status==="accepted");
     } else if (chipVal === 2) {
       fetchedProperties = !isSuperAdmin ? fetchedProperties.filter(el => !el.isForRent) : fetchedProperties.filter(el => el.status==="Rejected");
     }
         setProperties(fetchedProperties);
         console.log(chipVal);
         
         console.log(fetchedProperties);
         setIsLoadoing(false);
     } 
     let isSuperAdmin=localStorage.getItem("role")==="super_admin";
     useEffect(()=>{handleGetProperties();},[chipVal]);
    return(
        <div className="admin-info">
            <div className="admin-title">Properties</div>    
    { !isSuperAdmin ?<div className='admin-chips-row'>
                        <Custom_Chip title={"All"} index={0} val={chipVal} Click={()=>setChipVal(0)} />
                        <Custom_Chip title={"For Rent"} index={1} val={chipVal} Click={()=>setChipVal(1)}/>
                        <Custom_Chip title={"For sale"} index={2} val={chipVal} Click={()=>setChipVal(2)}/>

                    </div>:<div className='admin-chips-row'>
                        <Custom_Chip title={"Pending"} index={0} val={chipVal} Click={()=>setChipVal(0)} />
                        <Custom_Chip title={"Accepted"} index={1} val={chipVal} Click={()=>setChipVal(1)}/>
                        <Custom_Chip title={"Rejected"} index={2} val={chipVal} Click={()=>setChipVal(2)}/>

                    </div>}
            {properties?<div className='admin-body'>
                    
                    {properties.map((property)=>(
                        <div onClick={()=>navigate(`/Admin/property?id=${property.id}`)}>
                            <RE_Card property={property}/>
                        </div>
                        ))}
            </div>:
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}} className='admin-body'>
                <div style={{fontSize:'50PX'}} >No properties found .</div>
            </div>}
        </div>
    );
}
export default AdminProperties;