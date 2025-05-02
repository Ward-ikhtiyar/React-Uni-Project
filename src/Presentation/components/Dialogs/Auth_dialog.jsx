import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import './Auth_dialog.css'
import {  useState } from "react";
import { Login } from "@mui/icons-material";
function AuthDialog({open,onClose}){
    const [isLogin,setisLogin]=useState(false);
    const handleClose=(event,reason)=>{
        if(reason==='backdropClick') 

        onClose();
        setisLogin(false);
    };
    if(!isLogin){
        return(
            <Dialog id="dialog" open={open}onClose={handleClose}>
                <DialogTitle>
    
                    <div className="Main-title">
                        Welcome Back!
                        </div>
                </DialogTitle>
                <DialogContent>
                    <div className="dialog-body">
                        <p>Phone Number</p>
                        <input className="inputBox" type="text" />
                        <p>Password</p>
                        <input className="inputBox" type="text" />
                        <p className="forgot-text">Forgot Password?</p>
                        <button className="login-button">Log in</button>
                        <p className="create-text" onClick={()=>{
                            setisLogin(!isLogin);
                            console.log(isLogin);
                        }}>Create account</p>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }else if(isLogin){
    return(
        <Dialog id="dialog" open={open}onClose={handleClose}>
            <DialogTitle>

                <div className="Main-title">
                    Welcome to SpeedOrder
                    </div>
            </DialogTitle>
            <DialogContent>
                <div className="dialog-body">
                    <p>New Number</p>
                    <input className="inputBox" type="text" />
                    <p>New Password</p>
                    <input className="inputBox" type="text" />
                    <ul style={{color:"grey",fontSize:"15px"}}>
                       <li>Must be 8 charcaters</li>
                       <li>Mix of letters and Numbers</li>
                    </ul>
                    <button style={{marginTop:"5px"}} className="login-button">Create </button>
                    <p  className="create-text" onClick={()=>{setisLogin(!isLogin)}}>Log in</p>
                </div>
            </DialogContent>
        </Dialog>
    );}
    
}
export default AuthDialog