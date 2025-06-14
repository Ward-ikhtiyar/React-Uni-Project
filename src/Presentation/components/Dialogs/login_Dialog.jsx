import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Axios from "../../../API/axios";
import EndPoints from "../../../API/endpoints";
import SignUpDialog from "./signup_dialog";

import { replace, useNavigate } from "react-router-dom";
import ErrorSnackbar from "../snackBar/erorr_snack";
import { login } from "../../../API/requests";
function LoginDialog({open,onClose}){
    let navigate=useNavigate();
    const handleClose=(event,reason)=>{
        console.log();

        if(reason==='backdropClick') 
        onClose();  }
    const[snackOpen,isSnackOpen]=useState(false);
    const [snackTitle,setSnackTitle]=useState('');
    const [number,setNumber]=useState('');
        const [password,setPassword]=useState('');
        const[signUp,setSignUp]=useState(false);
    
    const handleLogin=async()=>{
        console.log('logining');
    const response= await login(number,password)
    if(response===200){
        navigate(0);
    }
         if(response===401){
                setSnackTitle("wrong Number/Password");
                isSnackOpen(true);
            }
            if(response===404){
                setSnackTitle("Account doesnt exist");
                isSnackOpen(true);
            }
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
             <ErrorSnackbar open={snackOpen} title={snackTitle} handleClose={()=>isSnackOpen(false)}/>   
            </>
            );}
            export default LoginDialog;
            