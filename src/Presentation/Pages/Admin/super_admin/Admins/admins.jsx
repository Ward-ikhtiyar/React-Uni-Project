import { useState,useEffect } from "react";
import { adminGetAdmins } from "../../../../../API/admin_requests";
import Custom_Chip from "../../../../../Presentation/Pages/Profile/components/Chips/chip";
import '../../Properties/admin_main.css'
import { Add } from "@mui/icons-material";
import AddAdminDialog from "../../../../../Presentation/components/Dialogs/Admin/Add_admin_dialog";
function AdminsPage(){
    const [chipVal,setChipVal]=useState(0);
    const [admins,setAdmins]=useState([]);
    const [logs,setLogs]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [open,setOpen]=useState(false);
    // async function handleGetAdmins(){
    //     try{
    //         const response=await adminGetAdmins();
    //         setAdmins(response);
    //     }catch(e){
    //         setError(e);
    //     }
    // }
    // async function handleGetLogs(){
    //     try{
    //         const response=await adminGetLogs();
    //         setLogs(response);
    //     }catch(e){
    //         setError(e);
    //     }
    // }
    // useEffect(()=>{
    //     if(chipVal===0){
    //         handleGetAdmins();
    //     }else{
    //         handleGetLogs();
    //     }
    // },[chipVal]);
    const handleClose=()=>{
        setOpen(false);
    }
    return(
        <>
            <div className="admin-info">
                <div className="admin-title">Admins</div>
                <div style={{width:"90%",display:"flex",flexDirection:"row",gap:"10px",justifyContent:"space-between"}} >
                <div className="admin-chips-row">
                        <Custom_Chip title={"Admins"} index={0} val={chipVal} Click={()=>setChipVal(0)} />
                        <Custom_Chip title={"Logs"} index={1} val={chipVal} Click={()=>setChipVal(1)}/>
                    </div>
                    <button onClick={()=>setOpen(true)} className="colored-button" style={{width:"150px",height:"40px",display:"flex"}}><Add/>Add Admin</button>
                    </div>
                <div className="admin-body">
                    
                </div>
            </div>
            <AddAdminDialog open={open} onClose={handleClose}/>
            </>
        
    )
}

export default AdminsPage;