import Card from "../../Home/components/Card";
import { createPlan, getPlans } from "../../../../API/other_requests";
import { useState,useEffect } from "react";
import './plans.css'
import { useNavigate } from "react-router-dom";
import { CircularProgress, Dialog, DialogActions, DialogTitle } from "@mui/material";
function PlansPage(){
    const[open,setOpen]=useState(false);
    const navigate=useNavigate();
    const plansPics=["","public/assets/images/houseForSale.svg",""];
const[Plans,setPlans]=useState([]);
    async function handleGetPlans(){
        let fetchedPlans=await getPlans(false);
        console.log("fetched planssssssss");
        console.log(fetchedPlans)
        setPlans(fetchedPlans);
    }
    useEffect(()=>{
        handleGetPlans();
    },[]);
    async function handleClick(id) {
        setOpen(true);
        let url=await createPlan(id);
        if(url){
                    console.log(url);
        window.location.href=url;
        }

    }
    return(
        <>
        <div  id="plans-info"  className="profile-info">
              <div  className="requests-title">
                        Plans
                    </div>
                        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}} id="plans-body" className='profile-body'>
{Plans.map((plan, index) => (
    <div onClick={()=>{handleClick(index)}}>
        <Card
    key={index}
    plan={plan}
/>
    </div>
  
))}
                                </div>

        
        </div>
        <Dialog open={open}>
            <DialogTitle>
                <div style={{textAlign:'center', fontFamily:'Lexend' ,fontSize:'30px'}}>Redirecting...</div>
                </DialogTitle>
            <DialogActions>
                <div style={{display:'flex', alignItems:'start',justifyContent:'center', height:"100px", width:'300px'}}>
                    <CircularProgress sx={{color:'var(--app-blue)', marginTop:'20px', scale:'150%'}}/>
                </div>
            </DialogActions>
        </Dialog>
        </>
    );
}
export default PlansPage