import React, { useState } from 'react';
import './AgentAboutSection.css';

function AgentAboutSection({ 
    sectionTitle, 
    title, 
    description, 
    languages = [], 
    experience,
    showMoreEnabled = false 
}) {
    const [showMore, setShowMore] = useState(false);
    
    const shouldTruncate = showMoreEnabled && description && description.length > 450;
    const truncatedText = shouldTruncate ? description.substring(0, 450) + "..." : description;
    const displayText = showMore ? description : truncatedText;

    return (
        <div className="agent-profile-body-about-agent">
            <h3 className="agent-profile-section-title">{sectionTitle}</h3>
            <h4 className="agent-profile-title">{title}</h4>
            <p className="agent-profile-description">
                {displayText}
                {shouldTruncate && (
                    <span 
                        className="agent-profile-showmore" 
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? " Show less" : " Show more"}
                    </span>
                )}
            </p>
            
            {languages.length > 0 && (
                <div className="agent-profile-languages">
                    <span className="agent-profile-languages-label">Speaks</span> {languages.join(', ')}
                </div>
            )}
            
            {experience && (
                <div className="agent-profile-experience">
                    {experience}
                </div>
            )}
        </div>
    );
}

export default AgentAboutSection;