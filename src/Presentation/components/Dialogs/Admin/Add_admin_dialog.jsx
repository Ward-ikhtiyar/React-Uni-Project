import { Dialog, DialogTitle, DialogContent, TextField } from "@mui/material";
import { useState } from "react";
import "../Auth_dialog.css"
import { Close } from "@mui/icons-material";
function AddAdminDialog({open,onClose}){
    const [number,setNumber]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const handleAddAdmin=()=>{
        console.log(number,name);
    }
    return(
        <Dialog open={open} onClose={onClose}>
            <DialogTitle  >
                <div className="Main-title">
                    {'Add Admin'}
                    <div className="back-button"  style={{scale:"1.3",cursor:"pointer",marginTop:"2px",marginRight:"10px"}} onClick={onClose}><Close/></div>
                </div>
            </DialogTitle>
            <DialogContent className="dialog-body">
            <p>Name</p>
                <input className="inputBox" type="text" placeholder=" " value={`${number}`} onInput={(e)=>{
                            setName(e.target.value);
                            console.log(number)
                        }} />
                <p>Phone Number</p>
                <input className="inputBox" type="text" placeholder=" " value={`${number}`} onInput={(e)=>{
                            setNumber(e.target.value);
                            console.log(number)
                        }} />
                        <p>Password</p>
                        <input className="inputBox" type="text" placeholder=" " value={`${password}`} onInput={(e)=>{
                            setPassword(e.target.value);
                            console.log(password);
                        }} />
                    <div style={{height:"40px"}}></div>
                <button style={{width:"100%",height:"40px",borderRadius:"5px",backgroundColor:"var(--app-blue)",color:"white",fontSize:"20px",fontFamily:"Lexend",border:"none"}} className="login-button" onClick={handleAddAdmin}>Add Admin</button>
            </DialogContent>
        </Dialog>
    )
}

export default AddAdminDialog;