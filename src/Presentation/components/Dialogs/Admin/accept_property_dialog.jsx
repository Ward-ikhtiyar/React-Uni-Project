import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useState } from "react";
import "./accept_property.css";
import { adminAcceptProperty } from "../../../../API/admin_requests";
import ErrorSnackbar from "../../snackBar/erorr_snack";
import { useNavigate } from "react-router-dom";
function AcceptPropertyDialog({open,onClose,id}){
    const [rating,setRating]=useState(0);
    const [isAcceptLoading,setIsAcceptLoading]=useState(false);
    const [openSnackbar,setOpenSnackbar]=useState(false);
    const [snackBarTitle,setSnackBarTitle]=useState("");
    const navigate=useNavigate();
    const handleCloseSnackbar=()=>{
        setOpenSnackbar(false);
    }
    const handleRating=(e)=>{
        setRating(e.target.value);
    }
    const handleAccept=()=>{
        if(rating===0){
            setOpenSnackbar(true);
            setSnackBarTitle("Please rate the property");
            return;
        }
        adminAcceptProperty(id,Number(rating)).then((status)=>{  
          setIsAcceptLoading(true);
          if(status===200){
            navigate(-1,{replace:true});
            setIsAcceptLoading(false);
          }
          else{
            setIsAcceptLoading(false);
            setOpenSnackbar(true);
            setSnackBarTitle("Failed to accept property");
          }
    
        });
      }
    return(
        <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open} onClose={onClose}>
            <DialogTitle>
                <div className="Main-title">Rate the Property</div>
                </DialogTitle>
                <DialogContent>
                    <div className="dialog-body" style={{display:'flex',gap:'10px',alignItems:'center'}}>
                        <div className="accept-input">
                            <input max={5} min={1} type="number" placeholder="Rate the Property" value={rating} onChange={handleRating} />{`/5`}
                        </div>
                        <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <span style={{fontSize:'20px',fontWeight:'500',color:'var(--app-blue)'}}> Easy</span><span style={{fontSize:'20px',fontWeight:'500',color:'var(--app-font-color)'}}>Rent</span>
                        <span style={{fontSize:'30px',fontWeight:'500',color:'var(--app-blue)',marginLeft:'5px'}}>Estimates</span>
                        </div>
                        <div onClick={handleAccept} style={{width:'10vw',height:'40px',backgroundColor:'var(--app-blue)',marginTop:'10px'}} className="colored-button">Accept</div>
                    </div>
                </DialogContent>
      <ErrorSnackbar open={openSnackbar} handleClose={handleCloseSnackbar} title={snackBarTitle} />

        </Dialog>
    )
}

export default AcceptPropertyDialog;