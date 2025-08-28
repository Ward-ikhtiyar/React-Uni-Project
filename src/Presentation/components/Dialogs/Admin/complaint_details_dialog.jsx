import { Close, Delete, Visibility } from "@mui/icons-material";
import { CircularProgress, Dialog,DialogContent,DialogTitle } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { markAsSeen } from "../../../../API/admin_requests";
import MySnackbar from "../../snackBar/success_snack";
function ComplaintDetail({complaint,open,onClose,reGet}){
    const headerStyle={
    color:'grey',

    };
    const [loading,setLoading]=useState(false);
    const [success,setSuccess]=useState(false);
    const[msg,setMsg]=useState('');

    const {t}=useTranslation();
    async function handleSeen(isFixed) {
        try{
          setLoading(true);
          let data=await markAsSeen(complaint.id,isFixed);
          setLoading(false); 
          setSuccess(true); 
          reGet(true);
          setMsg(isFixed?"Complaint is Marked as Resloved":"Complaint is Marked as Rejected");
          onClose();
        }catch(e){
            console.log(e.response);
        }
    }
    return (
        <>
        <Dialog PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open} onClose={onClose} >
        <DialogTitle>
                <div className="Main-title">{`${t('complaint')} #${complaint.id}`}
                    <div className="close-icon" onClick={onClose}>
                    <Close className="close-icon" sx={{scale:'120%'}} />
                    </div>
                </div>
                </DialogTitle>
                <DialogContent>
                <div className="dialog-body" style={{display:'flex',gap:'10px',alignItems:'start'}}>
                      <div><div style={headerStyle}>title:</div>{complaint.title} </div> 
                      <div><div style={headerStyle}>Email Address:</div>{complaint.myEmail} </div>
                      <div><div style={headerStyle}>Description:</div>{complaint.description} </div>       
                    <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                      <button onClick={()=>handleSeen(true)} style={{width:'250px',height:'6vh',fontFamily:'Tajawal'}} className="colored-button">{loading?<CircularProgress sx={{color:'white',scale:'70%'}}/>:<Visibility/>} Mark as Fixed</button>  
                      <button onClick={()=>handleSeen(false)} style={{backgroundColor:'var(--app-red)',width:'100px',height:'6vh',fontFamily:'Tajawal'}} className="colored-button">{loading?<CircularProgress sx={{color:'white',scale:'70%'}}/>:<Delete/>} Delete</button>             
                    </div>
                </div>
                </DialogContent>
        </Dialog>
        <MySnackbar open={success} handleClose={()=>{setSuccess(false),reGet(false)}} title={msg}/>
        </>
    );
}
export default ComplaintDetail