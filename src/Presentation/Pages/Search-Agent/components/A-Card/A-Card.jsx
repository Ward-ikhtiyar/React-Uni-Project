import React, { useState } from 'react';
import Info from "./A-Card-Info.json"
import "./A-Card.css"
import { LocationOnOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AgentDialog from '../../../Agent/Agent';

const A_Card = ({ agent }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="agent-card"
            onClick={() => {
                console.log(`dialog ${openDialog}`);
                // setOpenDialog(!openDialog)
                navigate(`/AgentDetails?id=${agent.id}`);
            }}
        >
            <AgentDialog open={openDialog} onClose={() =>  setOpenDialog(false) } id={agent}/>
            <div className="agent-header">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s"
                    alt="Agent"
                    className="agent-photo"
                />
                {/* <div className="badge">Top Agent<br />on Zillow</div> */}
            </div>
            <div className="agent-info">
                <h2 className="agent-name">Matt Laricy</h2>
                <p className="agent-company">Americorp Real Estate</p>
                <p className="price-range">$13K - $3.8M <span>team price range</span></p>
                <p className="sales">497 <span>team sales last 12 months</span></p>
                <p className="sales">5164 <span>team sales in Chicago</span></p>
            </div>
            <div className="rating">
                <span className="stars">5.0 ★</span>
                <span className="review-count">(1812)</span>
            </div>
        </div>
    );
};

export default A_Card;
