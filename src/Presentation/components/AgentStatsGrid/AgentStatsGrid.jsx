import React from 'react';
import './AgentStatsGrid.css';

function AgentStatsGrid({ stats }) {
    return (
        <div className="agent-profile-header-right-stats">
            <div className="agent-stats-row">
                {stats.map((stat, index) => (
                    <div key={index} className="agent-stat">
                        <div className="agent-stat-value">{stat.value}</div>
                        <div className="agent-stat-label">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AgentStatsGrid;