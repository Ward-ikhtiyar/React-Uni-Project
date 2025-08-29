import Card from "../../../Home/components/Card";
import { createPlan, getPlans } from "../../../../../API/other_requests";
import { useState,useEffect } from "react";
import { Add } from "@mui/icons-material";
import './plans.css'
import AddPlanDialog from "../../../../components/Dialogs/Admin/add_plan_dialog";
import EditPlanDialog from "../../../../components/Dialogs/Admin/edit_plan_dialog";
function AdminPlansPage(){
    const[open,setOpen]=useState(false);
    const [editOpen,setEditOpen]=useState(false);
    const[planId,setPlanId]=useState(false);
    const plansPics=["","public/assets/images/houseForSale.svg",""];
const[Plans,setPlans]=useState([]);
    async function handleGetPlans(){
        let fetchedPlans=await getPlans(false);
        setPlans(fetchedPlans);
    }
    useEffect(()=>{
        handleGetPlans();
    },[]);
     function handleClick(index) {
        setPlanId(index);
      setEditOpen(true);  
    }
    return(
        <>
        <div id="admin-info"  className="admin-info">
              <div  className="admin-title">
                        Plans
                    </div>
<div style={{width:"90%",display:"flex",flexDirection:"row-reverse",gap:"10px",justifyContent:"space-between",}} >
                    <button onClick={()=>setOpen(true)} className="colored-button" style={{width:"150px",height:"40px",display:"flex"}}><Add/>Add Plan</button>
                </div>
                        <div  className='admin-body'>
  
{Plans.map((plan, index) => (
    
        <Card
   plan={plan}
   onClick={()=>handleClick(index)}
   isAdmin={true}
  />
    
  
))}
                                </div>

        <AddPlanDialog open={open} onClose={()=>setOpen(false)}/>
        <EditPlanDialog planId={planId} open={editOpen} onClose={()=>setEditOpen(false)} />    
        </div>
        
        </>
    );
}
export default AdminPlansPage