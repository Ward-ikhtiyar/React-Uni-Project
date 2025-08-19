import React, { useCallback, useState } from 'react';
import './AgentPromoteSection.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Link } from 'react-router-dom';

function AgentPromoteSection({ profileCompletion = 25, onPromotionItemClick }) {
    const [completed, setCompleted] = useState([false,false,true]);
    const promotionItems = [
        // { id: 1, text: 'Add "About me"', destination: 'page', page: '/AgentAboutMe', completed: completed[id] },
        { id: 1, text: 'Add service areas', destination: 'page', page: '/AgentAboutMe', completed: false },
        { id: 2, text: 'check payment plan', destination: 'page', page: '/AgentAboutMe', completed: true },
        { id: 3, text: 'Add a photo', destination: 'dialog', dialogType: 'imageUploadd', completed: true }
        // { id: 3, text: 'Add your past sales to your profile', completed: false },
        // { id: 4, text: 'Connect your listings', completed: false },
        // { id: 5, text: 'Get 5 or more past clients to review you', completed: false },
    ];
    // const completedPromotionItems = useCallback;

    const handleItemClick = (item) => {
        if (onPromotionItemClick && item.destination === 'dialog') {
            onPromotionItemClick(item);
        }
    };

    return (
        <section className="agent-promote-section">
            <h2 className="promote-title">Promote yourself on Zillow</h2>

            {/* Progress Bar */}
            {/* <ProgressBar percentage={profileCompletion} /> */}

            {/* Promotion Items */}
            <div className="promotion-items">
                {promotionItems.map((item) => (
                    item.destination === 'page' ? (
                        <Link
                            to={item.page}
                            key={item.id}
                            className={`promotion-item ${item.completed ? 'completed' : ''}`}
                        >
                            <div className="promotion-number">
                                {item.completed ? '✓' : item.id}
                            </div>
                            <span className="promotion-text">{item.text}</span>
                        </Link>
                    ) : (
                        <div
                            key={item.id}
                            className={`promotion-item ${item.completed ? 'completed' : ''}`}
                            onClick={() => handleItemClick(item)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="promotion-number">
                                {item.completed ? '✓' : item.id}
                            </div>
                            <span className="promotion-text">{item.text}</span>
                        </div>
                    )
                ))}
            </div>
        </section>
    );
}

export default AgentPromoteSection;