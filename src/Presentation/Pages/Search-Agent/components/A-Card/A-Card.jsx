import React, { useState } from 'react';
import "./A-Card.css"
import { ArrowDownward, ArrowUpward, LocationOnOutlined, Percent, Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AgentDialog from '../../../Agent/Agent';

const A_Card = ({ agent }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();
    
    // Use agent data if available, otherwise use fallback values
    const agentData = agent || {};
    const fullLocation = Object.values(agentData.location || {})
  .filter(val => val && typeof val === "string") // remove null/undefined
  .join(" • ");
    return (
        <div className="agent-card"
            onClick={() => {
                setOpenDialog("hello world");
                navigate(`/AgentDetails?id=${agentData.id || 'default'}`);
            }}
        >
            <div className="agent-header">
                <img
                    src={agentData.profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s"}
                    alt="Agent"
                    className="agent-photo"
                />
            </div>
            <div className="agent-info">
                <h2 className="agent-name">{agentData.username || "Agent Name"}</h2>
                <div className='agent-info-first'>
                  <p className="agent-stats">
                    <Visibility sx={{color:'var(--app-blue)'}}/> &nbsp; {agentData.agencyInfo?.agencyViews || 0}  
                </p>
                  <p className="agent-stats">
                    <ArrowUpward sx={{color:'var(--app-blue)'}}/> &nbsp;{agentData.agencyInfo?.agencyVotes || 0} &nbsp;<ArrowDownward sx={{color:'var(--app-blue)'}}/>
                  </p>
                  <p className="agent-stats">
                    <Percent sx={{color:'var(--app-blue)'}}/> &nbsp; {agentData.agencyInfo?.agencyCommissionRate || 0}  
                </p>
                  
               </div>
                <p color='var(--app-font)' className="agent-location">
                    <LocationOnOutlined sx={{color:'var(--app-blue)'}} />
                    {fullLocation || "Location not specified"}
                </p>
            </div>
        </div>
    );
};

export default A_Card;
