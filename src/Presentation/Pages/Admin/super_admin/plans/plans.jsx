import Card from "../../../Home/components/Card";
import { createPlan, getPlans } from "../../../../../API/other_requests";
import { useState,useEffect } from "react";
import { Add } from "@mui/icons-material";
import './plans.css'
import AddPlanDialog from "../../../../components/Dialogs/Admin/add_plan_dialog";
function AdminPlansPage(){
    const[open,setOpen]=useState(false);
    const plansPics=["","public/assets/images/houseForSale.svg",""];
const[Plans,setPlans]=useState([]);
    async function handleGetPlans(){
        let fetchedPlans=await getPlans(false);
        setPlans(fetchedPlans);
    }
    useEffect(()=>{
        handleGetPlans();
    },[]);
     function handleClick() {
      setOpen(true);  
    }
    return(
        <>
        <div id="admin-info"  className="admin-info">
              <div  className="admin-title">
                        Plans
                    </div>
<div style={{width:"90%",display:"flex",flexDirection:"row-reverse",gap:"10px",justifyContent:"space-between",}} >
                    <button onClick={()=>handleClick()} className="colored-button" style={{width:"150px",height:"40px",display:"flex"}}><Add/>Add Plan</button>
                </div>
                        <div id="plans-body" className='admin-body'>
  
{Plans.map((plan, index) => (
    <div onClick={()=>{handleClick(index)}}>
        <Card
    key={index}
    name={` SYP ${plan.planPrice}/month`}
    desc={plan.description}
    image={plansPics[index]}
  />
    </div>
  
))}
                                </div>

        <AddPlanDialog open={open} onClose={()=>setOpen(false)}/>
        </div>
        
        </>
    );
}
export default AdminPlansPage