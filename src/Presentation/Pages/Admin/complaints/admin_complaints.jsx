import { Chip } from '@mui/material';
import './admin_complaints.css'
import { Add,HouseOutlined } from '@mui/icons-material';
import Custom_Chip from '../../Profile/components/Chips/chip';
import { useEffect, useState } from 'react';
import ComplaintCard from './request_card/Admin_complaint_card';
import { adminGetReports } from '../../../../API/admin_requests';
function AdminComplaintsPage(){
    const [complaints,setComplaints]=useState([]);
    const[chipVal,setChipVal]=useState(0);
    const [loading,isLoading]=useState(false);
    const [error,setError]=useState(false);
    const[reGet,setReget]=useState(false);
    
    useEffect(()=>{
     getReports();  
    },[chipVal,reGet]);
    async function getReports() {
        try{
            isLoading(true);
        let data=await adminGetReports(chipVal===1);
        setComplaints(data);
        isLoading(false);
       }catch(e){
        console.log(e);
        setError(true)
       } 
    }
return(
    <div className="admin-info" >
        <div className="admin-title">
            Requests
        </div>
        <div className='admin-chips-row'>
            <Custom_Chip Click={()=>setChipVal(0)} title={"All"}  index={0} val={chipVal}/>
            <Custom_Chip Click={()=>setChipVal(1)} title={"Pending"}  index={1} val={chipVal}/>            
        </div>

        <div className='admin-body'>
            {complaints.map((c,index)=>(<ComplaintCard key={index} complaint={c} setReget={setReget}/>))
            }
            </div>
            
    </div>
);
}
export default AdminComplaintsPage