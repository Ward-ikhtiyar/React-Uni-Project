import { useState, useEffect } from "react";
import { adminBlockUser, adminGetUserDetails} from "../../../../API/admin_requests";
import { Dialog, DialogTitle, DialogContent, CircularProgress } from "@mui/material";
import { History, Delete, Close, Warning, Pending, PendingActions } from "@mui/icons-material";
import MySnackbar from "../../../components/snackBar/success_snack";

function UserDetails({id,open,onClose}){
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(false);
    const[openSnackbar,setOpenSnackbar]=useState(false);
    const[isBanLoading,setIsBanLoading]=useState(false);
    const onCloseSnackbar=()=>{
        setOpenSnackbar(false);
    }
    const [snackBarTitle,setSnackBarTitle]=useState("");
    useEffect(()=>{
        if (open && id) {
            setLoading(true);
            adminGetUserDetails(id).then((data)=>{
                setUser(data);
                setLoading(false);
            }).catch(error => {
                console.error('Error fetching User details:', error);
                setLoading(false);
            });
        }
    },[id, open]);
    const handleBlock=()=>{
        setIsBanLoading(true);
        adminBlockUser(id).then((status)=>{
            if(status===200){
                setTimeout(()=>{
                    setOpenSnackbar(true);
                    setSnackBarTitle("User Banned Successfully");
                    setIsBanLoading(false);
                    onClose();
                },500);

            }
        }).catch((error)=>{
            console.log(error);
            setIsBanLoading(false);
        });
    }
    return(
        <>
        <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open} onClose={onClose}  >
            <DialogTitle>
                <div className="Main-title" style={{}}>
                    {loading ? 'Loading...' : user ? `User #${user.id}` : 'User Details'}
                </div>
            </DialogTitle>
            <DialogContent style={{paddingTop: '8px', paddingBottom: '16px'}}>
                <div style={{animation:'ProfileAnimation 0.5s'}} className="dialog-body">
                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                        <CircularProgress />
                    </div>
                ) : user ? (
                    <>
                    <div className="profile-pic" style={{
                        scale:'70%', 
                        alignSelf:'center',
                        backgroundImage:`url(public/assets/images/adminAvatar.svg)`,
                        margin: '-20px auto'
                    }}/>
                    
                    <div style={{display: 'flex', flexDirection: 'column', }}>
                        <div className="editProfileTab" style={{}}>
                            <div className="editProfileTab-content" style={{fontSize: '16px', gap: '10px'}}>
                                Username:
                                <div className="user-info" style={{fontSize: '16px'}}>{user.username}</div>
                            </div>
                        </div>
                        <div className="editProfileTab" style={{}}>
                            <div className="editProfileTab-content" style={{fontSize: '16px', gap: '10px'}}>
                                Phone:
                                <div className="user-info" style={{fontSize: '16px'}}>{user.phone}</div>
                            </div>
                        </div>
                        <div className="editProfileTab" style={{}}>
                            <div className="editProfileTab-content" style={{fontSize: '16px', gap: '10px'}}>
                                Age:
                                <div className="user-info" style={{fontSize: '16px'}}>{user.age}</div>
                            </div>
                        </div>
                        <div className="editProfileTab" >
                            <div className="editProfileTab-content" style={{fontSize: '16px', gap: '10px'}}>
                                Role:
                                <div className="user-info" style={{fontSize: '16px'}}>{user.userType==="owner"?"user":user.userType}</div>
                            </div>
                        </div>
                        <div className="editProfileTab" >
                            <div className="editProfileTab-content" style={{fontSize: '16px', gap: '10px'}}>
                                Created At:
                                <div className="user-info" style={{fontSize: '16px'}}>{String(user.createdAt).substring(0,10)}</div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: 'flex', gap: '10px', marginTop: '16px'}}>
                        <button className="colored-button" style={{
                            flex: 1, 
                            height: '40px', 
                            backgroundColor:user.userType==="pending"?'var(--app-blue)':'var(--app-grey)',
                            gap: '10px', 
                            fontSize: '16px',
                            boxShadow:'none'
                        }}>
                            <PendingActions sx={{scale: '120%'}}/> {user.userType==="pending"?"Check upgrade request":"No Requests"}
                        </button>
                        <button onClick={handleBlock} className="colored-button" style={{
                            width: '100px', 
                            height: '40px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: '5px', 
                            backgroundColor: '#FF0000',
                            fontSize: '14px'
                        }}>
                            {isBanLoading ? <CircularProgress size={20} style={{color:'white'}} /> : <Warning/>} Ban 
                        </button>
                    </div>
                    </>
                ) : (
                    <div>No admin data available</div>
                )}
                </div>
            </DialogContent>
        </Dialog>
        <MySnackbar open={openSnackbar} handleClose={onCloseSnackbar} title={snackBarTitle} />
        </>
    );
}

export default UserDetails;