import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Axios from "../../../API/axios";
import EndPoints from "../../../API/endpoints";
import SignUpDialog from "./signup_dialog";

import { replace, useNavigate } from "react-router-dom";
function LoginDialog({open,onClose}){
    let navigate=useNavigate();
    const handleClose=(event,reason)=>{
        console.log();
        if(reason==='backdropClick') 
        onClose();  }
    const [number,setNumber]=useState('');
        const [password,setPassword]=useState('');
        const[signUp,setSignUp]=useState(false);
    async function login(Number,Password){
        let response=await Axios.post(EndPoints.Auth.Login,
        {
           phone: Number,
           password:Password
        });
        let data=response.data;
        
        console.log(data);
        if(data.accessToken){
            console.log(`loginSuccess:${data.accessToken}`);
            localStorage.setItem("token",data.accessToken);
            navigate(0);
        }else{
            console.log("error in token");
        }
    }
    const handleLogin=async()=>{
        await login(number,password);
    }
    return(
        <>
<Dialog id="dialog" open={open}onClose={handleClose}>
                <DialogTitle>
    
                    <div className="Main-title">
                        Welcome Back!
                        </div>
                </DialogTitle>
                <DialogContent>
                    <div className="dialog-body">
                        <p>Phone Number</p>
                        <input className="inputBox" type="text" placeholder=" " value={`${number}`} onInput={(e)=>{
                            setNumber(e.target.value);
                            console.log(number)
                        }} />
                        <p>Password</p>
                        <input className="inputBox" type="text" placeholder="" value={`${password}`} onInput={(e)=>{
                            setPassword(e.target.value);
                            console.log(password);
                        }} />
                        <p className="forgot-text">Forgot Password?</p>
                        <button className="login-button" onClick={handleLogin}>Log in</button>
                        <p className="create-text" onClick={()=>{
                            onClose();
                            setSignUp(true);
                        }}>Create account</p>
                    </div>
                </DialogContent>
            </Dialog>
            <SignUpDialog open={signUp} onClose={()=>setSignUp(false)}/>
            </>
            );}
            export default LoginDialog;
            