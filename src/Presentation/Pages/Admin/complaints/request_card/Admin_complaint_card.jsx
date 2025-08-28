import { HouseOutlined } from '@mui/icons-material';
import './admin_complaint_card.css'
import { useState } from 'react';
import ComplaintDetail from '../../../../components/Dialogs/Admin/complaint_details_dialog';
function ComplaintCard({complaint,setReget}){
    const[open,setOpen]=useState(false);
    let statusColor=complaint.reportStatus==="Fixed"?'var(--app-green)':complaint.reportStatus==="rejected"?'var(--app-red)':'var(--app-blue)';
    let statusBackColor=complaint.reportStatus==="Fixed"?'var(--app-green-opaque)':complaint.reportStatus==="rejected"?'var(--app-red-opaque)':'var(--app-blue-opaque)';

    return(
<>
            <div className='request-card'>
                <div className='request-card-second'>{complaint.title}</div>
                <div className='request-card-third'>{String(complaint.createdAt).substring(0,10)} <div style={{color:statusColor,backgroundColor:statusBackColor,paddingLeft:'10px',paddingRight:'10px',borderRadius:'6px'}}>{complaint.reportStatus}</div> </div>
                <div className='request-card-third'>{complaint.myEmail}</div>
                <div className='request-card-third' style={{flexDirection:'row-reverse'}}>
                        <button onClick={()=>setOpen(true)} className='colored-button'style={{fontFamily:'Tajawal',}}>View Details</button>
                </div>

            </div>
        <ComplaintDetail reGet={setReget} complaint={complaint} open={open} onClose={()=>{setOpen(false)} }/>
           </>
    );
}
export default ComplaintCard