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
        { value: agentData.salesLast12Months, label: "Sales last 12 months" },
        { value: agentData.totalSales, label: "Total sales" },
        { value: agentData.priceRange, label: "Price range" },
        { value: agentData.averagePrice, label: "Average price" }
    ];

    return (
        <div className="agent-profile-header">
            <AgentBasicInfo
                photo={agentData.photo}
                name={agentData.name}
                company={agentData.company}
                priceRange={agentData.priceRange}
                salesLast12Months={agentData.salesLast12Months}
                totalSalesInCity={agentData.totalSalesInCity}
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