import React from 'react';
import './AgentBasicInfo.css';

function AgentBasicInfo({ 
    photo, 
    name, 
    company, 
    location,
    commissionRate,
    views,
    votes,
    isVerified
}) {
    return (
        <div className="agent-profile-header-left">
            <div className="agent-header">
                <img
                    src={photo}
                    alt="Agent"
                    className="agent-photo"
                />
            </div>
            <div className="agent-info F-col-c-c">
                <h2 className="agent-name">{name}</h2>
                <p className="agent-company">{company}</p>
                <p className="agent-location">
                    📍 {location}
                </p>
                <p className="commission-rate">
                    {commissionRate}% <span>commission rate</span>
                </p>
                <p className="profile-stats">
                    {views} <span>profile views</span>
                </p>
                <p className="client-votes">
                    {votes} <span>client votes</span>
                </p>
            </div>
        </div>
    );
}

export default AgentBasicInfo;