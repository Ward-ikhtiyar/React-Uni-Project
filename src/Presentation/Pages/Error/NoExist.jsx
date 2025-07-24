import React from 'react';
import { Link } from 'react-router-dom';
import './NoExist.css';

const NoExist = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-code">404</div>
        <div className="not-found-divider"></div>
        <div className="not-found-content">
          <h1>Page Not Found</h1>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          
          <div className="not-found-actions">
            <Link to="/" className="home-button">
              Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="back-button"
            >
              Go Back
            </button>
          </div>
          
          <div className="not-found-search">
            <p>Looking for something specific?</p>
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search our site" 
                className="search-input" 
              />
              <button className="search-button">Search</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="not-found-footer">
        <p>Need help? <a href="/contact">Contact our support team</a></p>
      </div>
    </div>
  );
};

export default NoExist;