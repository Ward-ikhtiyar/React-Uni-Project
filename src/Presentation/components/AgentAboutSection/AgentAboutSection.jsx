import React, { useState } from 'react';
import './AgentAboutSection.css';

function AgentAboutSection({ 
    sectionTitle, 
    title, 
    description, 
    specialties = [], 
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
            
            {specialties.length > 0 && (
                <div className="agent-profile-specialties">
                    <span className="agent-profile-specialties-label">Specialties</span>
                    {specialties.map((specialty, index) => (
                        <span key={index} className="agent-profile-specialty">
                            {specialty}
                        </span>
                    ))}
                </div>
            )}
            
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
            
            {/* Social links section - commented out for now */}
            {/* <div className="agent-profile-links">
                <a href="#" className="agent-profile-website">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    Visit team website
                </a>
                <span className="agent-profile-socials">
                    <span className="agent-profile-social-icon">
                        <svg width="20" height="20" fill="#1877f3" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                        </svg>
                    </span>
                    <span className="agent-profile-social-icon">
                        <svg width="20" height="20" fill="#0077b5" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.25h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/>
                        </svg>
                    </span>
                </span>
            </div> */}
        </div>
    );
}

export default AgentAboutSection;