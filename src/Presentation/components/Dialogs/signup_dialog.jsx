
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Axios from "../../../API/axios";
import EndPoints from "../../../API/endpoints";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Areas } from "../../../consts/lists";
import VerifyDialog from "./verify_dialog";
import { getToken, } from "firebase/messaging";
import LoginDialog from "./login_dialog";
import { requestNotificationPermissionAndToken } from "../../../utils/firebase";

function SignUpDialog({open,onClose}){

    const[isVerify,setisVerify]=useState(false);
    const[isLogin,setisLogin]=useState(false);
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [password,setPassword]=useState('');
    const[place,setPlace]=useState(0);
    const [userId,setId]=useState(-1);
    const [token,setToken]=useState('');

    async function register(name,number,password,place) {
        let token=await requestNotificationPermissionAndToken();
        console.log(`${name}${number}${password}${place.lon} ${place.lat}`);
        try{
                let response=await Axios.post(EndPoints.Auth.Register,{
            phone:`${number}`,
            username:name,
            password:password,
            pointsDto:{
                lat:place.lat,
                lon:place.lon,
                
            },
            token:token
        }
    
    );
        const data=response.data
        console.log(`getting the ${data}`);
        if(data){
            console.log(`success ${data.userId}`);
            localStorage.setItem('id',data.userId);
            setId(data.userId);
            setisVerify(true);
            onClose();
        }
        
        }
        
    
catch(error){
    if(error.response&&error.response.status===409){
        setId(localStorage.getItem('id'));
         setisVerify(true);
            onClose();
    }
    console.log(error.response);
};
        
        
    }
    
     const handleClose=(event,reason)=>{
        console.log();
        if(reason==='backdropClick') 
        onClose();  }
    return (
    <>
    <Dialog id="dialog" open={open}onClose={handleClose}>
        <DialogTitle>

            <div className="Main-title">
                Welcome !
                </div>
        </DialogTitle>
        <DialogContent>
            <div className="dialog-body">
            <p>Username</p>
            <input className="inputBox" type="text" value={name} onInput={(e)=>setName(e.target.value)} />
                <p>Number</p>
                <input className="inputBox" type="text"value={number} onInput={(e)=>setNumber(e.target.value)} />
                <p>Password</p>
                <input className="inputBox" type="text" value={password} onInput={(e)=>setPassword(e.target.value)} />
                <ul style={{color:"grey",fontSize:"15px"}}>
                   <li>Must be 6 charcaters</li>
                   <li>Mix of letters and Numbers</li>
                </ul>
                <p>Pick a location</p>
                <select className="dropdown-signup" onChange={(e)=>setPlace(e.target.value)}>
                    <option value={-1}>-- Choose --</option>
                    {Areas.map((area)=>
                        <option key={area.name} value={Areas.indexOf(area)} >{area.name}</option>)}
                </select>
              
                
               
                <button style={{marginTop:"5px"}} className="login-button" onClick={async()=>register(name,number,password,Areas[place])}>Create </button>
                <p  className="create-text" onClick={()=>{onClose();}}>close</p>
            </div>
        </DialogContent>
    </Dialog>
    <VerifyDialog Id={userId} open={isVerify} onClose={()=>{setisVerify(false)}}/>

    </>
    );
}
export default SignUpDialog;
  