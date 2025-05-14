import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Person,Edit } from "@mui/icons-material";

function EditProfileDialog({open,onClose,phone,name}){
     const handleClose=(event,reason)=>{
            if(reason==='backdropClick') 
            onClose();  
            }
    return(
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                <div  className="Main-title">Edit Profile </div>
            </DialogTitle>
            <DialogContent >
                <div style={{justifyContent:'start',animation:'ProfileAnimation 0.5s'}} className="dialog-body">
                        <div className="profile-pic" style={{scale:'75%', alignSelf:'center'}}></div>
                    <div className="editProfileTab">
                        <div className="editProfileTab-content">
                            Username : 
                            <div className="user-info">{name}</div>
                            </div>
                            <button className="edit-button-dialog">
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
                            <button className="edit-button-dialog">
                                <Edit/>
                            </button>
                    </div>
                    <div style={{height:'50px'}}></div>
                    <button className="login-button" onClick={()=>onClose()}> Ok</button>
                </div>
              
            </DialogContent>
        </Dialog>
    );
}
export default EditProfileDialog