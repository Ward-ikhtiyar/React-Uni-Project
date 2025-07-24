import React from 'react';
import './AgentPromoteSection.css';
import ProgressBar from '../ProgressBar/ProgressBar';

function AgentPromoteSection({ profileCompletion = 25, onPromotionItemClick }) {
    const promotionItems = [
        { id: 1, text: 'Add "About me"',page: `{<imageUploadDialog/>}`, completed: false },
        { id: 2, text: 'Add service areas', completed: false },
        // { id: 3, text: 'Add your past sales to your profile', completed: false },
        // { id: 4, text: 'Connect your listings', completed: false },
        // { id: 5, text: 'Get 5 or more past clients to review you', completed: false },
        { id: 6, text: 'Add a photo', completed: true }
    ];

    const handleItemClick = (item) => {
        if (onPromotionItemClick) {
            onPromotionItemClick(item);
        }
    };

    return (
        <section className="agent-promote-section">
            <h2 className="promote-title">Promote yourself on Zillow</h2>

            {/* Progress Bar */}
            <ProgressBar percentage={profileCompletion} />

            {/* Promotion Items */}
            <div className="promotion-items">
                {promotionItems.map((item) => (
                    <a
                        key={item.id}
                        href="#"
                        className={`promotion-item ${item.completed ? 'completed' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleItemClick(item);
                        }}
                    >
                        <div className="promotion-number">
                            {item.completed ? '✓' : item.id}
                        </div>
                        <span className="promotion-text">{item.text}</span>
                    </a>
                ))}
            </div>

            {/* <div className="zillow-offers">
                <a href="#" className="zillow-offers-link">
                    See what Zillow offers agents
                </a>
            </div> */}
        </section>
    );
}

export default AgentPromoteSection;