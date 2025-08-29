import React from 'react';
import AgentBasicInfo from '../AgentBasicInfo/AgentBasicInfo';
import AgentStatsGrid from '../AgentStatsGrid/AgentStatsGrid';
import AgentPropertiesCarousel from '../AgentPropertiesCarousel/AgentPropertiesCarousel';
import './AgentProfileHeader.css';

function AgentProfileHeader({ 
    agentData, 
    carouselItems, 
    scrollTargetId = "properties-list" 
}) {
    const statsData = [
        { value: agentData.views || 0, label: "Profile views" },
        { value: agentData.votes || 0, label: "Client votes" },
        { value: `${agentData.commissionRate || 1.0}%`, label: "Commission rate" },
        { value: agentData.isVerified ? "Verified" : "Unverified", label: "Account status" }
    ];

    return (
        <div className="agent-profile-header">
            <AgentBasicInfo
                agent={agentData}
            />
            <div className="agent-profile-header-right F-col-c-c">
                <AgentPropertiesCarousel
                    items={carouselItems}
                    scrollTargetId={scrollTargetId}
                />
                <AgentStatsGrid stats={statsData} />
            </div>
        </div>
    );
}

export default AgentProfileHeader;