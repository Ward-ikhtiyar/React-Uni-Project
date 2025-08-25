import { useEffect, useState } from "react";
import Custom_Chip from "../../../Profile/components/Chips/chip";
import { adminGetReports } from "../../../../../API/admin_requests";

function AdminComplaints(){
    const[chipVal,setChipVal]=useState(0);
    const[filter,setFilte]=useState('');
    const[reports,setReports]=useState([]);
    const [loading,setLoading]=useState(true);
    const roleMap = {
        0: 'T1',
        1: 'T2',
        2:'T3',
        3:'other'
    }
         async function getReports() {
            try {
                let fetchedReports = await adminGetReports();
                if(Array.isArray(fetchedReports)){
                    let filteredReports=fetchedReports.filter((compl)=>compl.title!==roleMap[chipVal])
                setReports(filteredReports);
    
                }
            } catch (error) {
                setError(error);
                setUsers([]);
            } finally {
                setLoading(false);
            }
        }

        useEffect(()=>{
        console.log("changed chip");
        getReports();
    },[chipVal]);
    

    return (
        <div className="admin-info">
            <div className="admin-title">Complaints</div>   
                <div className='admin-chips-row'>
                <Custom_Chip title={"Notifications"} index={0} val={chipVal} Click={()=>setChipVal(0)}/>
                <Custom_Chip title={"Properties"} index={1} val={chipVal} Click={()=>setChipVal(1)}/>
                <Custom_Chip title={"Refunds"} index={2} val={chipVal} Click={()=>setChipVal(2)}/>
                <Custom_Chip title={"Other"} index={3} val={chipVal} Click={()=>setChipVal(3)}/>



                </div>
        
        </div>
    );
}