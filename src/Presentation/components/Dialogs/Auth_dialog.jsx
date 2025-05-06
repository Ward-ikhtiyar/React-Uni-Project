import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import './Auth_dialog.css'
import {  useState } from "react";
import VerificationInput from "react-verification-input";
function AuthDialog({open,onClose}){
    const [isLogin,setisLogin]=useState(false);
    const[isAgent,setisAgent]=useState(false);
    let checkBoxVal=false;
    const handleClose=(event,reason)=>{
        if(reason==='backdropClick') 
            setisLogin(false);
        onClose();  
        setisAgent(false);
    };
    if(isAgent){
        return(<Dialog id="dialog" open={open} onClose={handleClose}>
            <DialogTitle>
            <div className="Main-title" style={{justifySelf:"center"}}>
                        Enter Verification Code
                        </div>
            </DialogTitle>
            <DialogActions>
                <div style={{animation:'none',width:'36vw'}} className="dialog-body">
                    <VerificationInput classNames={{
                        character:'character',
                        container:'container',
                        characterInactive:'character-inactive',
                        characterFilled:'character-active',
                        characterSelected:'character-selected'
                        
                }} validChars="0-9" length={6}></VerificationInput>
                <button className="login-button" style={{marginTop:"3vh",marginBottom:'3vh'}}>Verify</button>
                </div>
                
            </DialogActions>

        </Dialog>);
    }
    if(!isLogin){
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
                        <input className="inputBox" type="text" />
                        <p>Password</p>
                        <input className="inputBox" type="text" />
                        <p className="forgot-text">Forgot Password?</p>
                        <button className="login-button">Log in</button>
                        <p className="create-text" onClick={()=>{
                            setisLogin(!isLogin);
                        }}>Create account</p>
                    </div>
                </DialogContent>
            </Dialog>
            
            </>
            
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
                <p>Username</p>
                <input className="inputBox" type="text" />
                    <p>Number</p>
                    <input className="inputBox" type="text" />
                    <p>Password</p>
                    <input className="inputBox" type="text" />
                    <ul style={{color:"grey",fontSize:"15px"}}>
                       <li>Must be 8 charcaters</li>
                       <li>Mix of letters and Numbers</li>
                    </ul>
                    <div className="agent">
                    <input type="checkbox" onClick={
                        ()=>{
                          checkBoxVal=!checkBoxVal;    
                    }}></input>
                    <div>I am an agent</div>
                    </div>
                    
                   
                    <button onClick={()=>{
                        checkBoxVal? setisAgent(true):setisAgent(false);
                    }}
                     style={{marginTop:"5px"}} className="login-button">Create </button>
                    <p  className="create-text" onClick={()=>{setisLogin(!isLogin)}}>Log in</p>
                </div>
            </DialogContent>
        </Dialog>
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