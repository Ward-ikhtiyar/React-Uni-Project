import React, { useState } from 'react';
import "./A-Card.css"
import { LocationOnOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AgentDialog from '../../../Agent/Agent';

const A_Card = ({ agent }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();
    
    // Use agent data if available, otherwise use fallback values
    const agentData = agent || {};
    
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
                <p className="agent-company">{agentData.agencyInfo?.agencyName || "Agency Name"}</p>
                <p className="agent-location">
                    <LocationOnOutlined style={{ fontSize: '16px', marginRight: '4px' }} />
                    {agentData.location?.address || "Location not specified"}
                </p>
                <p className="agent-commission">
                    Commission Rate: {agentData.agencyInfo?.agencyCommissionRate || 1.0}%
                </p>
                <p className="agent-stats">
                    Views: {agentData.agencyInfo?.agencyViews || 0} | 
                    Votes: {agentData.agencyInfo?.agencyVotes || 0}
                </p>
                <p className={`agent-verified ${agentData.isAccountVerified ? 'verified' : 'unverified'}`}>
                    {agentData.isAccountVerified ? "✓ Verified Account" : "Unverified Account"}
                </p>
            </div>
        </div>
    );
};

export default A_Card;
