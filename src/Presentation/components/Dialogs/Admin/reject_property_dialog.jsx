import { Dialog,DialogTitle,DialogActions,DialogContent } from "@mui/material";
import { useState } from "react";
import { adminRejectProperty } from "../../../../API/admin_requests";
import { CircularProgress } from "@mui/material";
import ErrorSnackbar from "../../snackBar/erorr_snack";
import MySnackbar from "../../snackBar/success_snack";
function RejectPropertyDialog({open,onClose,id}){
    const [message,setMessage]=useState('');
    const[isLoading,setIsLoading]=useState(false);
    const[openSnackbar,setOpenSnackbar]=useState(false);
    const[snackbarTitle,setSnackbarTitle]=useState('');
    const[openErrorSnackbar,setOpenErrorSnackbar]=useState(false);
    const onCloseErrorSnackbar=()=>{
        setOpenErrorSnackbar(false);
    }
    const handleCloseSnackbar=()=>{
        setOpenSnackbar(false);
    }
    const handleReject=()=>{
        setIsLoading(true);
        adminRejectProperty(id,message).then((status)=>{
            if(status===200){
                setIsLoading(false);
                setOpenSnackbar(true);
                setSnackbarTitle('Property rejected successfully');
                setTimeout(()=>{
                onClose();
                },500);
            }
            else{
                setIsLoading(false);
                setOpenSnackbar(true);
                setSnackbarTitle('Failed to reject property');
            }
        });
    }
    return(
        <Dialog open={open} onClose={onClose}>
            <DialogTitle><div className="Main-title">Write a message to the user</div></DialogTitle>
            <DialogContent >
                <div className="admin-body">
                    <textarea onChange={(e)=>{setMessage(e.target.value)}} style={{height:'18vh',width:'35vw', resize:'none', paddingTop:'10px'}} className="inputBox" placeholder="Write a message to the user" />
                </div>
            </DialogContent>    
            <DialogActions>
                <button style={{width:'10vw',height:'40px',backgroundColor:'var(--app-blue)',marginTop:'10px',boxShadow:'none'}} className="colored-button" onClick={onClose}>Cancel</button >
                <button style={{width:'10vw',height:'40px',backgroundColor:'var(--app-red)',marginTop:'10px',boxShadow:'none'}} className="colored-button" onClick={()=>{handleReject()}}>{isLoading?<CircularProgress size={20} sx={{color:'white'}}/>:'Reject'}</button>
            </DialogActions>
            <MySnackbar open={openSnackbar} handleClose={handleCloseSnackbar} title={snackbarTitle} />
            <ErrorSnackbar open={openErrorSnackbar} handleClose={onCloseErrorSnackbar} title={snackbarTitle} />
        </Dialog>   
    )
}
export default RejectPropertyDialog;