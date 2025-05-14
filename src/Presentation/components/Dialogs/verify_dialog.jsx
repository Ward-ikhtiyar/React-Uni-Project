
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import VerificationInput from "react-verification-input";
import Axios from "../../../API/axios";
import EndPoints from "../../../API/endPoints";
import { data, useNavigate } from "react-router-dom";
function VerifyDialog ({open,onClose,Id}) {
    function changeText() {
    console.log("Starting countdown...");

    let countdown = 120;
    setCanSend(countdown);
    setResendText(`You can Resend Again after ${countdown} seconds`);

    const intervalId = setInterval(() => {
        countdown--;

        setCanSend(countdown);

        if (countdown <= 0) {
            clearInterval(intervalId);
            setResendText("Resend Code");
            setCanSend(0);
            return;
        }

        setResendText(`You can Resend Again after ${countdown} seconds`);
    }, 1000);
}



const [resendText,setResendText]=useState("Resend Code");
    const[canSend,setCanSend]=useState(0);
    async function reSend(id){
        console.log(canSend);
        if(canSend===0){
        let response=await Axios.get(`${EndPoints.Auth.Resend}/${id}`,);
         let data=response.data;
         if(data){
            console.log("change text function");
            changeText();
         }
        }
        
    }
    const navigate=useNavigate();
    async function Verify(id,code) {
        let response=await Axios.post(`${EndPoints.Auth.Verify}/${id}`,
        {
            code:`${code}`
        });
        console.log(response.data)
        let data=response.data;
        if(data){
            localStorage.setItem('token',data.accessToken);
            navigate(0);
        }
        
    }
    const[code,setCode]=useState("");
    const handleClose=(event,reason)=>{
            if(reason==='backdropClick') 
            onClose();  
            }
            const handleComplete=(value)=>{
                console.log(value);
                setCode(value);
                
            }
    return(<Dialog id="dialog" open={open} onClose={handleClose}>
            <DialogTitle>
            <div className="Main-title" style={{justifySelf:"center"}}>
                        Enter Verification Code
                        </div>
            </DialogTitle>
            <DialogActions>
                <div style={{animation:'none',width:'36vw'}} className="dialog-body">
                    <div className="subtitle-verify">We`ve Sent You a 5-Digit Code via SMS !</div>
                    <VerificationInput onComplete={handleComplete} 
                    classNames={{
                        character:'character',
                        container:'container',
                        characterInactive:'character-inactive',
                        characterFilled:'character-active',
                        characterSelected:'character-selected'
                        
                }} validChars="0-9" length={5}></VerificationInput>
                <button className="login-button" onClick={async()=>{
                    await Verify(Id,code);
                }} style={{marginTop:"3vh",marginBottom:'3vh'}}>Verify</button>
                <p  className="create-text" onClick={async()=>{
                    await reSend(Id);
                }}>{resendText}</p>
                </div>
                
            </DialogActions>

        </Dialog>);
}
export default VerifyDialog