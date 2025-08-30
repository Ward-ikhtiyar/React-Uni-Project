import Card from "../../Home/components/Card";
import { createPlan, getPlans } from "../../../../API/other_requests";
import { useState, useEffect } from "react";
import './plans.css'
import { useNavigate } from "react-router-dom";
import { CircularProgress, Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import UpgradeDialog from "../../../components/Dialogs/upgrade_dialog";

function PlansPage(){
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const plansPics = ["","public/assets/images/houseForSale.svg",""];
    const [Plans, setPlans] = useState([]);
    const[openUpgr,setOpenUpgr]=useState(false);

    async function handleGetPlans(){
        let fetchedPlans = await getPlans(false);
        console.log("fetched planssssssss");
        console.log(fetchedPlans);
        setPlans(fetchedPlans);
    }

    useEffect(()=>{
        handleGetPlans();
    },[]);

    async function handleClick(id) {
        setOpen(true);
        let url = await createPlan(id);
        if(url){
            console.log(url);
            window.location.href = url;
        }
    }

    
    const role = localStorage.getItem("role");
    console.log(`ur role is ${role}`)
    if(role === "owner"||role==="pending"){
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh",
                width:'100vw',
                textAlign: "center",
                backgroundColor: "var(--app-background)"
            }}>
                <h1 style={{ fontSize: "48px", marginBottom: "20px", color: "var(--app-blue)", fontFamily: "Lexend" }}>
                    Verify Your Account
                </h1>
                <p style={{ fontSize: "20px", marginBottom: "30px", color: "#555", maxWidth: "500px" }}>
                    To continue using the Plans feature, please verify your account with us.
                </p>
            {role!=="pending"?<Button 
                    variant="contained" 
                    sx={{ 
                        backgroundColor: "var(--app-blue)", 
                        fontSize: "18px", 
                        padding: "12px 24px", 
                        borderRadius: "12px" 
                    }}
                    onClick={() => {
                        console.log("Verify button clicked")
                        setOpenUpgr(true)}}
                >
                    Verify Now
                </Button>:<h2>Your Upgrade Request is Pending......</h2>}
        <UpgradeDialog open={openUpgr} onClose={()=>setOpenUpgr(false)}/>

            </div>
        );
    }

    return(
        <>
        <div id="plans-info" className="profile-info">
            <div className="requests-title">Plans</div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}} id="plans-body" className='profile-body'>
                {Plans.map((plan, index) => (
                    <div key={index} onClick={() => {handleClick(index)}}>
                        <Card plan={plan}/>
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

export default PlansPage;
