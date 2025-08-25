import { DialogTitle, Dialog, DialogContent, IconButton } from "@mui/material";
import { deleteProperty, getDetails } from "../../../API/requests";
import { useState, useEffect } from "react";
import { Delete,Edit } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import './manage_property_dialog.css'
import ConfirmDialog from "./confirm_dialog";
import { useNavigate } from "react-router-dom";
import ErrorSnackbar from "../snackBar/erorr_snack";
import EditProfileDialog from "./Profile_dialog";
import EditPropertyDialog from "./edit_property_dialog";
import { PropertyProvider } from "../../../consts/context";

function ManagePropertyDialog({ open, id, onClosee,setOpen,property }) {
    const [openConfirm,setOpenConfirm]=useState(false);
    const [openEdit,setOpenEdit]=useState(false);
  const[password,setPassword]=useState("");
  const [openSnackBar,setOpenSnackBar]=useState(false);
    const navigate=useNavigate();

    // useEffect(() => {
    //     if (open && id) {
    //         const fetchData = async () => {
    //             try {
    //                 const data = await getDetails(id);
    //                 setProperty(data);
    //             } catch (error) {
    //                 console.error("Failed to fetch property details:", error);
    //             }
    //         };
    //         fetchData();
    //     }
    // }, [open, id]);
    async function handleConfirm(){
        console.log(password);
        let response=await deleteProperty(property.id,password);
        console.log("response")
        console.log(response);
        if(response===200){
            window.location.reload();
        }
        if(response===401){
            setOpenSnackBar(true);
        }
        if(response===500){
            setOpenSnackBar(true)
        }
    }
    return (
        <>
        <Dialog   PaperProps={{
    sx: { backgroundColor: 'var(--app-background)' },
  }} open={open} onClose={onClosee} fullWidth maxWidth={"xs"}>
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center",fontFamily:'Lexend', }}>
               <div> {`Property `} <span style={{color:'var(--app-blue)'}}>{`#${property.id}`}</span></div>
                <IconButton onClick={onClosee}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <Typography sx={{fontFamily:'Lexend',color:'var(--app-blue)'}} variant="body1">Address: <span style={{color:"var(--app-font)",fontFamily:'Tajawal'}}>{`${property.location.city},${property.location.street}`}</span> </Typography>
                <Typography sx={{fontFamily:'Lexend',color:'var(--app-blue)'}} variant="body1">Status: <span style={{color:'var(--app-font)'}}  >{property.status}</span> </Typography>
                <Typography sx={{fontFamily:'Lexend',color:'var(--app-blue)'}} variant="body1">Tenant: <span style={{color:'var(--app-font)'}}>{"ward"}</span></Typography>
                <div style={{height:'40px'}}></div>
                <div className="button-row">
                        <button onClick={()=>{
                            setOpenConfirm(true)
                            }} style={{width:'7vw',height:'40px',backgroundColor:'#FF0000'}} className="colored-button">
                            <Delete/> Delete
                        </button>
                        <button onClick={()=>{setOpenEdit(true);}} style={{width:'7vw',height:'40px'}} className="colored-button">
                        <Edit/>Edit
                        </button>
                        </div>
                {/* Add more details as needed */}
            </DialogContent>
        </Dialog>
        <ConfirmDialog setPassword={setPassword} onConfirm={handleConfirm} open={openConfirm} setOpen={setOpenConfirm}/>
        <ErrorSnackbar open={openSnackBar} handleClose={()=>setOpenSnackBar(false)} title={"Incorrect Password or Server Issue"} /> 
            <PropertyProvider>
            <EditPropertyDialog id={property.id}   open={openEdit} onClose={()=>setOpenEdit(false)}/>                   
            </PropertyProvider>
        </>
    );
}

export default ManagePropertyDialog;
