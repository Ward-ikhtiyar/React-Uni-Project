import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

import './admins_logs.css';
import AdminDetailsDialog from '../../../../components/Dialogs/Admin/admin_details';
import { useState } from 'react';
    function AdminsLogs({ log }) {
    const[openAdminDetailsDialog,setOpenAdminDetailsDialog]=useState(false);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getPropertyId = (msg) => {
        const match = msg.match(/#(\d+)/);
        return match ? match[1] : null;
    };
    const onViewAdmin=(id)=>{
        setOpenAdminDetailsDialog(true);
    }

    const propertyId = getPropertyId(log.meta.msg);
    
    return (
        <div className={`admins-logs-container ${log.meta.type === 'accept' ? 'accept-log' : 'reject-log'}`}>
            <div className="admin-logs-message">
                <span className={`admin-logs-type ${log.meta.type === 'accept' ? 'accept-type' : 'reject-type'}`}>
                    {log.meta.type.toUpperCase()}:
                </span>
                {" "}{log.meta.msg}
            </div>
            <div className="admin-logs-links">
                {propertyId && (
                    <Link 
                        to={`/Admin/property?id=${log.meta.propertyId}`} 
                        className="admin-logs-link"
                    >
                        <HomeIcon fontSize="small" /> View Property
                    </Link>
                )}
                <button id='view-admin-button' style={{backgroundColor:'transparent',border:'none',boxShadow:'none',fontFamily:'Lexend',color:'var(--app-blue)'}}
                    type="button"
                    onClick={() => onViewAdmin(log.admin.id)}
                    className="admin-logs-link"
                >
                    <PersonIcon fontSize="small" /> View Admin
                </button>
            </div>
            <div className="admin-logs-time">
                {formatDate(log.createdAt)}
            </div>
            <AdminDetailsDialog open={openAdminDetailsDialog} onClose={()=>{setOpenAdminDetailsDialog(false)}} id={log.admin.id} />
        </div>
    );
}

export default AdminsLogs;