import React from 'react';
import PropTypes from 'prop-types';
import './AgentPropertiesCarousel.css';

const AgentPropertiesCarousel = ({ 
  items = [], 
  label = "TEAM", 
  title = "Recent Sales", 
  subtitle = "Sales numbers represent all team members", 
  scrollTargetId = "properties-list",
  maxVisibleItems = 4,
  className = ""
}) => {
  const handleSeeMoreClick = () => {
    // Error handling for missing target elements
    if (!scrollTargetId) {
      console.warn('AgentPropertiesCarousel: No scrollTargetId provided');
      return;
    }

    const targetElement = document.getElementById(scrollTargetId);
    if (!targetElement) {
      console.warn(`AgentPropertiesCarousel: Element with id "${scrollTargetId}" not found`);
      return;
    }

    // Use smooth scrolling behavior with fallback for browser compatibility
    try {
      // Modern browsers with smooth scrolling support
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    } catch (error) {
      // Fallback for older browsers
      console.warn('AgentPropertiesCarousel: Smooth scrolling not supported, using fallback');
      targetElement.scrollIntoView();
    }
  };

  return (
    <div className={`agent-properties-carousel-container ${className}`.trim()}>
      <div className="agent-properties-carousel-title-row">
        <span className="agent-properties-carousel-label">{label}</span>
        <span className="agent-properties-carousel-title">{title}</span>
      </div>
      {subtitle && (
        <div className="agent-properties-carousel-subtitle">
          {subtitle}
        </div>
      )}
      <ul className="agent-properties-list">
        {items.slice(0, maxVisibleItems).map((item, index) => (
          <li key={index} className="agent-properties-list-item">
            {item}
          </li>
        ))}
        {items.length > maxVisibleItems && (
          <li className="agent-properties-list-item see-more-item">
            <button className="see-more-btn" onClick={handleSeeMoreClick}>
              See more
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

AgentPropertiesCarousel.propTypes = {
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  scrollTargetId: PropTypes.string,
  maxVisibleItems: PropTypes.number,
  className: PropTypes.string
};

AgentPropertiesCarousel.defaultProps = {
  label: "TEAM",
  title: "Recent Sales", 
  subtitle: "Sales numbers represent all team members",
  scrollTargetId: "properties-list",
  maxVisibleItems: 4,
  className: ""
};

export default AgentPropertiesCarousel;