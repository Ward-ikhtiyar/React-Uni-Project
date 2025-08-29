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

  const makeCarasouleItems = (propertiesData) => {

    if (propertiesData.length === 0) {
      return (
        <li className="agent-properties-list-item">
          <p>hello world</p>
        </li>
      );
    }
    else if (propertiesData.length <= maxVisibleItems && propertiesData.length !== 0) {
      return (

        propertiesData.slice(0, maxVisibleItems).map((item, index) => (
          <li key={index} className="agent-properties-list-item">
            <div key={item.id} className="carousel-item">
              <img
                src={item.firstImage}
                // alt={ite.title || property.multi_title?.english || 'Property'}
                className="carousel-image"
              />
            </div>
          </li>
        ))
      );
    }

    else {
      return (

        propertiesData.slice(0, maxVisibleItems).map((item, index) => (
          <li key={index} className="agent-properties-list-item">
            <div key={item.id} className="carousel-item">
              <img
                src={item.photo}
                // alt={ite.title || property.multi_title?.english || 'Property'}
                className="carousel-image"
              />
            </div>
          </li>
        ))
      );
    }
  }

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

    try {
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
        {makeCarasouleItems(items)}
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