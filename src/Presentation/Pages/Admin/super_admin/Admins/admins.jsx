import { useState,useEffect } from "react";
import { adminGetAdmins,adminGetLogs } from "../../../../../API/admin_requests";
import Custom_Chip from "../../../../../Presentation/Pages/Profile/components/Chips/chip";
import '../../Properties/admin_main.css'
import { Add } from "@mui/icons-material";
import AddAdminDialog from "../../../../../Presentation/components/Dialogs/Admin/Add_admin_dialog";
import AdminsWidget from "./admins_widget";
import AdminDetails from "../../../../../Presentation/components/Dialogs/Admin/admin_details";
import { CircularProgress } from "@mui/material";
import AdminsLogs from "./admins_logs";
function AdminsPage(){
    const [chipVal,setChipVal]=useState(0);
    const [admins,setAdmins]=useState([]);
    const [logs,setLogs]=useState([]);
    const [adminId,setAdminId]=useState(0);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [detailsOpen,setDetailsOpen]=useState(false);

    const [open,setOpen]=useState(false);
    async function handleGetAdmins(){
        setLoading(true);
        try{
            const response=await adminGetAdmins();
            setAdmins(response);
        }catch(e){
            setError(e);
            setAdmins([]);
            
        }
        setLoading(false);
    }
    useEffect(()=>{
        handleGetAdmins();
    },[]);
    async function handleGetLogs(){
        try{
            const response=await adminGetLogs();
            setLogs(response);
        }catch(e){
            setError(e);
        }
    }
    useEffect(()=>{
        if(chipVal===0){
            handleGetAdmins();
        }else{
            handleGetLogs();
        }
    },[chipVal]);
    const handleClose=()=>{
        setOpen(false);
    }

    const handleDetailsClose = () => {
        setDetailsOpen(false);
    }
    

    if (loading) {
        return (
            <div className="admin-info" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <CircularProgress />
            </div>
        );
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
              {chipVal===0 ?  <div  className="admin-body">
                    {admins.map((admin,index)=>(
                        <div key={index} onClick={()=>{setDetailsOpen(true);setAdminId(admin.id)}}>
                        <AdminsWidget  admin={admin}/>
                        </div>
                    ))}
                </div>:
                 <div className="admin-body">
                    {logs.map((log,index)=>(
                        <div key={index} >
                        <AdminsLogs log={log}/>
                        </div>
                    ))}
                </div>}
            </div>
            <AddAdminDialog getAdmins={handleGetAdmins} open={open} onClose={handleClose}/>
            <AdminDetails id={adminId} open={detailsOpen} onClose={handleDetailsClose} getAdmins={handleGetAdmins}/>
            </>
        
    )
}

export default AdminsPage;