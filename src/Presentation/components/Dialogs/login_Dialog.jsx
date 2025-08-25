import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import Axios from "../../../API/axios";
import EndPoints from "../../../API/endpoints";
import SignUpDialog from "./signup_dialog";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { replace, useNavigate } from "react-router-dom";
import ErrorSnackbar from "../snackBar/erorr_snack";
import { login } from "../../../API/requests";
import EnterPhoneDialog from "./resetPassword/enter_phone_dialog";
import { useTranslation } from "react-i18next";

function LoginDialog({open,onClose}){
    const{t,i18n}=useTranslation();
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
        const[showPassword,setShowPassword]=useState(false);
        const[forgotPassword,setForgotPassword]=useState(false);
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
<Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} id="dialog" open={open}onClose={handleClose}>
                <DialogTitle>
    
                    <div className="Main-title">
                        {t('welcomeBack')}
                        </div>
                </DialogTitle>
                <DialogContent>
                    <div className="dialog-body">
                        <p>{t('phoneNumber')}</p>
                        <input className="inputBox" type="text" placeholder=" " value={`${number}`} onInput={(e)=>{
                            setNumber(e.target.value);
                            console.log(number)
                        }} />
                        <p>{t('password')}</p>
                        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                            <input
                                className="inputBox"
                                type={showPassword ? "text" : "password"}
                                placeholder=""
                                value={password}
                                onInput={(e) => {
                                    setPassword(e.target.value);
                                    console.log(password);
                                }}
                                style={{ paddingRight: "40px" }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                style={{
                                    position: "absolute",
                                    right: "8px",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "16px"
                                }}
                                tabIndex={-1}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? <VisibilityOff sx={{color:'var(--app-blue)',scale:'10wa0%'}} /> : <Visibility sx={{color:'var(--app-blue)',scale:'100%'}} />}
                            </button>
                        </div>
                        <div onClick={()=>{
                            onClose();
                            setForgotPassword(true);
                        }}>
                        <p className="forgot-text">{t('forgotPass')}</p>
                        </div>
                        <button className="login-button" onClick={handleLogin}>{t('logIn')}</button>
                        <p className="create-text" onClick={()=>{
                            onClose();
                            setSignUp(true);
                        }}>{t('createAccount')}</p>
                    </div>
                </DialogContent>
            </Dialog>
            <SignUpDialog open={signUp} onClose={()=>setSignUp(false)}/>
            <EnterPhoneDialog open={forgotPassword} onClose={()=>setForgotPassword(false)}/>
             <ErrorSnackbar open={snackOpen} title={snackTitle} handleClose={()=>isSnackOpen(false)}/>   
            </>
            );}
            export default LoginDialog;
            