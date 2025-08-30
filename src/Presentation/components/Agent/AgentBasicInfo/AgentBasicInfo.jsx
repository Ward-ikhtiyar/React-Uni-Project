import React, { useEffect } from 'react';
import './AgentBasicInfo.css';

function AgentBasicInfo({
    agent,
}) {

    return (
        <div className="agent-profile-header-left">
            <div className="agent-header">
                <img
                    src={agent.photo}
                    alt="Agent"
                    className="agent-photo"
                />
            </div>
            <div className="agent-info F-col-c-c">
                <h2 className="agent-details-info">{agent.name}</h2>
                <p className="agent-details-company">{agent.company}</p>
                <p className="agent-details-location">
                    📍 {agent.location.country}
                </p>
                <p className="commission-rate">
                    {agent.commissionRate}% <span>commission rate</span>
                </p>
                <p className="profile-stats">
                    {agent.views} <span>profile views</span>
                </p>
                <p className="client-votes">
                    {agent.votes} <span>client votes</span>
                </p>
            </div>
        </div>
    );
}

export default AgentBasicInfo;