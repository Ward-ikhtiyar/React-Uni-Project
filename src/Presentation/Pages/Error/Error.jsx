import React from 'react';
import './Error.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h1 className="error-title">We're experiencing technical difficulties</h1>
        <p className="error-message">
          Our team has been notified and is working to resolve the issue.
        </p>
        <div className="error-actions">
          <button 
            onClick={() => window.location.reload()} 
            className="retry-button"
          >
            Try Again
          </button>
          <button 
            onClick={() => window.location.href = '/'} 
            className="home-button"
          >
            Return to Home
          </button>
        </div>
        <div className="error-help">
          <p>Need immediate assistance? <a href="/contact">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
