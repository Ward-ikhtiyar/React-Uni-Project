import React from 'react';
import './AgentBasicInfo.css';

function AgentBasicInfo({ 
    photo, 
    name, 
    company, 
    priceRange, 
    salesLast12Months, 
    totalSalesInCity 
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
                <p className="price-range">
                    {priceRange} <span>team price range</span>
                </p>
                <p className="sales">
                    {salesLast12Months} <span>team sales last 12 months</span>
                </p>
                <p className="sales">
                    {totalSalesInCity} <span>team sales in Chicago</span>
                </p>
            </div>
        </div>
    );
}

export default AgentBasicInfo;