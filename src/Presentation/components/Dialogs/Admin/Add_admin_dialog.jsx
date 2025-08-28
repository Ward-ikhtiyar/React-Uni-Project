import { Dialog, DialogTitle, DialogContent, TextField, CircularProgress } from "@mui/material";
import { useState } from "react";
import "../Auth_dialog.css"
import { Close } from "@mui/icons-material";
import { adminAddAdmin } from "../../../../API/admin_requests";
import MySnackbar from "../../../components/snackBar/success_snack";
import ErrorSnackbar from "../../snackBar/erorr_snack";

function AddAdminDialog({open,onClose,getAdmins}){
    const [number,setNumber]=useState("");
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [age,setAge]=useState("");
    const [loading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarTitle,setSnackbarTitle]=useState("");
    const[openErrorSnackbar,setOpenErrorSnackbar]=useState(false);
    const onCloseSnackbar = () => {
        setOpenSnackbar(false);
    }   
    const onCloseErrorSnackbar = () => {
        setOpenErrorSnackbar(false);
    }
    const handleAddAdmin= async ()=>{
        setLoading(true);
        
           let response= await adminAddAdmin(name,number,password,Number(age));
           if(response===201){
            setOpenSnackbar(true);
            setTimeout(()=>{
                setName("");
                setNumber("");
                setPassword("");
                setAge("");
                getAdmins();
                onClose();  
            },500);}
            if(response===400||response===401){
                setOpenErrorSnackbar(true);
                setSnackbarTitle("Failed to add admin check the phone number and name");
                
            }
        
        setLoading(false);
    }
    return(
        <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open} onClose={onClose}>
            <DialogTitle  >
                <div className="Main-title">
                    {'Add Admin'}
                    <div className="back-button"  style={{scale:"1.3",cursor:"pointer",marginTop:"2px",marginRight:"10px"}} onClick={onClose}><Close/></div>
                </div>
            </DialogTitle>
            <DialogContent className="dialog-body">
            <p>Name</p>
                <input className="inputBox" type="text" placeholder=" " value={`${name}`} onInput={(e)=>{
                            setName(e.target.value);
                            console.log(number)
                        }} />
                <p>Phone Number</p>
                <input  maxLength={10} className="inputBox" type="text" placeholder=" " value={`${number}`} onInput={(e)=>{
                            setNumber(e.target.value);
                            console.log(number)
                        }} />
                        <p>Password</p>
                        <input className="inputBox" type="text" placeholder=" " value={`${password}`} onInput={(e)=>{
                            setPassword(e.target.value);
                            console.log(password);
                        }} />
                        <div style={{display:"flex",flexDirection:"row",gap:"10px",marginTop:"10px",alignItems:"center"}}>
                        <p>Age</p>
                        <input style={{width:"100px"}} className="inputBox" type="number" placeholder=" " value={`${age}`} onInput={(e)=>{
                            setAge(e.target.value);
                            console.log(age);
                        }} />
                        </div>
                    <div style={{height:"40px"}}></div>
                <button 
                    disabled={loading}
                    style={{
                        width:"100%",
                        height:"40px",
                        borderRadius:"5px",
                        backgroundColor:"var(--app-blue)",
                        color:"white",
                        fontSize:"20px",
                        fontFamily:"Lexend",
                        border:"none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px"
                    }} 
                    className="login-button" 
                    onClick={handleAddAdmin}
                >
                    {loading ? <CircularProgress size={24} style={{color: 'white'}} /> : "Add Admin"}
                </button>
            </DialogContent>
            <MySnackbar open={openSnackbar} handleClose={onCloseSnackbar} title="Admin added successfully" />
                    <ErrorSnackbar open={openErrorSnackbar} handleClose={onCloseErrorSnackbar} title={snackbarTitle} />
        </Dialog>
    )
}

export default AddAdminDialog;