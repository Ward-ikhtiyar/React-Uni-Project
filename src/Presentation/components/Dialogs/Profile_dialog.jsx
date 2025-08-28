import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Person,Edit, Co2Sharp } from "@mui/icons-material";
import EditDialog from "./edit_dialog";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TokenAxios from "../../../API/tokenAxios";
import EndPoints from "../../../API/endPoints";
import ErrorSnackbar from "../snackBar/erorr_snack";

function EditProfileDialog({open,onClose,phone,name,image}){
    const navigate=useNavigate()
            const formData=new FormData();
        
    const [isOpen,setIsOpen]=useState(false);
    const [type,setType]=useState('');
    const[snack,setSnack]=useState(false);
     const handleClose=(event,reason)=>{
            if(reason==='backdropClick') 
            onClose();  
            }
    async function UploadImg(Img) {
        if(Img){
            console.log("image exists");
        }
        console.log(formData.get("user-image"));
        try{
            let response=await TokenAxios.post(EndPoints.User.UploadImg,formData,{headers: { "Content-Type": "multipart/form-data" }}
);
        if(response.status===201){
            navigate(0,{replace:true});
        }
        }
        catch(e){
            if(e.response.status===413){
                setSnack(true);
            }
        }
        
        
    }
    
    return(
        <>
        <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open} onClose={handleClose}>
            <DialogTitle>
                <div  className="Main-title">My Profile </div>
            </DialogTitle>
            <DialogContent >
                <div style={{justifyContent:'start',animation:'ProfileAnimation 0.5s'}} className="dialog-body">
                        <div className="profile-pic" style={{scale:'80%', alignSelf:'center',backgroundImage:`url(${image})`}}>
                             <input style={{color:'white'}} type="file" id="profilePic" onChange={(e)=>{
                                console.log(e.target.files[0]);
                                formData.append('user-image',e.target.files[0]);
                                UploadImg(e.target.files[0]);
                             }}></input>
                        <label className="edit-button-dialog" htmlFor="profilePic" style={{width:'30px', height:'30px'}}><Edit sx={{scale:'120%'}}/></label>
                        </div>
                       
                    <div className="editProfileTab">
                        <div className="editProfileTab-content">
                            Username : 
                            <div className="user-info">{name}</div>
                            </div>
                            <button onClick={()=>{
                                onClose();
                                setType('Username');
                                setIsOpen(true);
                                
                            }} className="edit-button-dialog">
                                <Edit/>
                            </button>
                    </div>
                    <div className="editProfileTab">
                        <div className="editProfileTab-content">
                            Number: 
                            <div className="user-info">{phone}</div>
                            </div>
                            
                           
                    </div>
                     <div className="editProfileTab">
                        <div className="editProfileTab-content">
                            Password : 
                            <div className="user-info">******</div>
                            </div>
                            <button onClick={()=>{
                                onClose();
                                setType('Password');
                                setIsOpen(true);
                            }} className="edit-button-dialog">
                                <Edit/>
                            </button>
                    </div>
                    <div style={{height:'50px'}}></div>
                    <button className="login-button" onClick={()=>onClose()}> Ok</button>
                </div>
              
            </DialogContent>
        </Dialog>
        <EditDialog type={type} open={isOpen} onClose={()=>{setIsOpen(false)}  }/>
            <ErrorSnackbar open={snack} title={"Photo is too big in size"} handleClose={()=>setSnack(false)}/>
        </>
        
    );
}
export default EditProfileDialog