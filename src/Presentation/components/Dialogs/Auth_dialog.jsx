import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import './Auth_dialog.css'
import {  useState } from "react";
import VerificationInput from "react-verification-input";
import { Login } from "@mui/icons-material";
import SignUpDialog from "./signup_dialog";
import LoginDialog from "./login_dialog";
import VerifyDialog from "./verify_dialog";
function AuthDialog({open,onClose}){
    const [isLogin,setisLogin]=useState(false);
    
    const[isVerify,setisVerify]=useState(false);
    if(isVerify){
        return(<VerifyDialog/>);
    }
    if(!isLogin){
        return(
            <LoginDialog/>
        );
    }else if(isLogin ){
    return(
        <SignUpDialog open={open}/>
    );}
    
}
export default AuthDialog




















 // if(isAgent){
    // return (<Dialog open={open} onClose={handleClose}  >
    //     <DialogTitle>
    //                     <div className="Main-title">
    //                         <div className="back-button" onClick={()=>{
    //                             setisAgent(false);
    //                         }}>back</div>
    //             Choose A plan 
    //          </div>
    //     </DialogTitle>
    //     <DialogActions>
    //         <div className="agent-main">
    //             <div className="option-button">
    //                 <div>1 Month</div>
    //                 <div>30$/Mo</div>    
    //             </div>
    //             <div className="option-button">
    //             <div>6 Months</div>
    //             <div>24$/Mo</div>
    //             </div>
    //             <div className="option-button">
    //             <div>12 Months</div>
    //             <div>20$/Mo</div>
    //             </div>
    //             {/* <div id="agent-left" className="agent-half">
    //             <p>New Number</p>
    //                  <input className="inputBox" type="text" />
    //                  <p>New Password</p>
    //                  <input className="inputBox" type="text" />
    //                  <ul style={{color:"grey",fontSize:"15px"}}>
    //                     <li>Must be 8 charcaters</li>
    //                     <li>Mix of letters and Numbers</li>
    //                     <button onClick={()=>{}}
    //                  style={{marginTop:"15%"}} className="login-button">Create </button>
    //              <p  className="create-text" onClick={()=>{setisLogin(!isLogin)}}>Log in</p>

    //                 </ul>
    //             </div>
    //             <div id="agent-right" className="agent-half">
    //                     <h2>Choose a Plan</h2>
    //                     <button className="option-button"></button>
    //                     <button className="option-button"></button>
    //                 </div>                 */}
    //         </div>
    //     </DialogActions>
    // </Dialog>);}