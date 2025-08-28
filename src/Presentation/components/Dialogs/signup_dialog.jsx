
import { CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Axios from "../../../API/axios";
import EndPoints from "../../../API/endpoints";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Areas } from "../../../consts/lists";
import VerifyDialog from "./verify_dialog";
import { getToken, } from "firebase/messaging";
import LoginDialog from "./login_dialog";
import { requestNotificationPermissionAndToken } from "../../../utils/firebase";
import { useTranslation } from "react-i18next";
import ErrorSnackbar from "../snackBar/erorr_snack";
function SignUpDialog({open,onClose}){
    const[isVerify,setisVerify]=useState(false);
    const[isLogin,setisLogin]=useState(false);
    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const [password,setPassword]=useState('');
    const[place,setPlace]=useState(0);
    const [userId,setId]=useState(-1);
    const [token,setToken]=useState('');
    const[loading,setisLoading]=useState(false);
    const[error,setError]=useState(false);
            const{t}=useTranslation();

    async function register(name,number,password,place) {
         setisLoading(true);   
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
            setisLoading(false);
            setisVerify(true);

            onClose();
        }
        
        }
        
    
catch(error){
    setisLoading(false);
    setError(true);
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
    <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} id="dialog" open={open}onClose={handleClose}>
        <DialogTitle>

            <div className="Main-title">
                {t('welcome')}
                </div>
        </DialogTitle>
        <DialogContent>
            <div className="dialog-body">
            <p>{t('userName')}</p>
            <input className="inputBox" type="text" value={name} onInput={(e)=>setName(e.target.value)} />
                <p>{t('phoneNumber')}</p>
                <input className="inputBox" type="text"value={number} onInput={(e)=>setNumber(e.target.value)} />
                <p>{t('password')}</p>
                <input className="inputBox" type="text" value={password} onInput={(e)=>setPassword(e.target.value)} />
                <ul style={{color:"grey",fontSize:"15px"}}>
                   <li>{t('mustBe6Chars')}</li>
                   <li>{t('mixLettersNumbers')}</li>
                </ul>
                <p></p>
                <select className="dropdown-signup" onChange={(e)=>setPlace(e.target.value)}>
                    <option value={-1}>{`-- ${t('choose')} --`}</option>
                    {Areas.map((area)=>
                        <option key={area.name} value={Areas.indexOf(area)} >{localStorage.getItem('lang')=="en"? area.name:area.arName}</option>)}
                </select>
              
                
               
                <button style={{marginTop:"5px"}} className="login-button" onClick={async()=>register(name,number,password,Areas[place])}>{loading?<CircularProgress sx={{scale:'70%',color:'white'}}/>:t('createAccount')} </button>
                <p  className="create-text" onClick={()=>{onClose();}}>{t('close')}</p>
            </div>
        </DialogContent>
    </Dialog>
    <VerifyDialog Id={userId} open={isVerify} onClose={()=>{setisVerify(false)}}/>
    <ErrorSnackbar title={t('errorMsg')} handleClose={()=>setError(false)} open={error}/>                    
    </>
    );
}
export default SignUpDialog;
  