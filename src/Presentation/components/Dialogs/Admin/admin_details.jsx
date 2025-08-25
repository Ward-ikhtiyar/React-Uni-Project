import { useState, useEffect } from "react";
import { adminGetAdminDetails,adminDeleteAdmin } from "../../../../API/admin_requests";
import { Dialog, DialogTitle, DialogContent, CircularProgress } from "@mui/material";
import { History, Delete } from "@mui/icons-material";
import MySnackbar from "../../../components/snackBar/success_snack";

function AdminDetails({id,open,onClose,getAdmins}){
    const [admin,setAdmin]=useState(null);
    const [loading, setLoading] = useState(false);
    const[openSnackbar,setOpenSnackbar]=useState(false);
    const[isDeleteLoading,setIsDeleteLoading]=useState(false);
    const onCloseSnackbar=()=>{
        setOpenSnackbar(false);
    }
    const [snackBarTitle,setSnackBarTitle]=useState("");
    useEffect(()=>{
        if (open && id) {
            setLoading(true);
            adminGetAdminDetails(id).then((data)=>{
                setAdmin(data);
                setLoading(false);
            }).catch(error => {
                console.error('Error fetching admin details:', error);
                setLoading(false);
            });
        }
    },[id, open]);
    const handleDelete=()=>{
        setIsDeleteLoading(true);
        adminDeleteAdmin(id).then((status)=>{
            if(status===200){
 

                setTimeout(()=>{
                    setOpenSnackbar(true);
                    setSnackBarTitle("Admin deleted successfully");
                    setIsDeleteLoading(false);
                    getAdmins();
                    onClose();
                },500);

            }
        }).catch((error)=>{
            console.log(error);
            setIsDeleteLoading(false);
        });
    }
    return(
        <>
        <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }}  open={open} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogTitle>
                <div className="Main-title" style={{padding: '8px 0'}}>
                    {loading ? 'Loading...' : admin ? `Admin #${admin.id}` : 'Admin Details'}
                </div>
            </DialogTitle>
            <DialogContent style={{paddingTop: '8px', paddingBottom: '16px'}}>
                <div style={{animation:'ProfileAnimation 0.5s'}} className="admin-dialog-body">
                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                        <CircularProgress />
                    </div>
                ) : admin ? (
                    <>
                    <div className="profile-pic" style={{
                        scale:'70%', 
                        alignSelf:'center',
                        backgroundImage:`url(public/assets/images/adminAvatar.svg)`,
                        margin: '-20px auto'
                    }}/>
                    
                    <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                        <div className="editProfileTab" style={{padding: '8px '}}>
                            <div className="editProfileTab-content" style={{fontSize: '16px', gap: '10px'}}>
                                Username:
                                <div className="user-info" style={{fontSize: '16px'}}>{admin.username}</div>
                            </div>
                        </div>
                        <div className="editProfileTab" style={{padding: '8px '}}>
                            <div className="editProfileTab-content" style={{fontSize: '16px', gap: '10px'}}>
                                Phone:
                                <div className="user-info" style={{fontSize: '16px'}}>{admin.phone}</div>
                            </div>
                        </div>
                        <div className="editProfileTab" style={{padding: '8px '}}>
                            <div className="editProfileTab-content" style={{fontSize: '16px', gap: '10px'}}>
                                Age:
                                <div className="user-info" style={{fontSize: '16px'}}>{admin.age}</div>
                            </div>
                        </div>
                        <div className="editProfileTab" >
                            <div className="editProfileTab-content" style={{fontSize: '16px', gap: '10px'}}>
                                Created At:
                                <div className="user-info" style={{fontSize: '16px'}}>{String(admin.createdAt).substring(0,10)}</div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: 'flex', gap: '10px', marginTop: '16px'}}>
                        <button className="colored-button" style={{
                            flex: 1, 
                            height: '40px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: '10px', 
                            fontSize: '16px',
                            boxShadow:'none'
                        }}>
                            <History sx={{scale: '120%'}}/> Check Logs
                        </button>
                        <button onClick={handleDelete} className="colored-button" style={{
                            width: '100px', 
                            height: '40px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            gap: '5px', 
                            backgroundColor: '#FF0000',
                            fontSize: '14px'
                        }}>
                            {isDeleteLoading ? <CircularProgress size={20} style={{color:'white'}} /> : <Delete/>} Delete 
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

export default AdminDetails;