import React from 'react';
import './ProgressBar.css';

function ProgressBar({
    percentage = 0,
    showText = true,
    textSuffix = '% complete',
    className = '',
    barClassName = '',
    fillClassName = '',
    textClassName = ''
}) {
    return (
        <div className={`progress-container ${className}`}>
            <div className={`progress-bar ${barClassName}`}>
                <div
                    className={`progress-fill ${fillClassName}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
            {showText && (
                <span className={`progress-text ${textClassName}`}>
                    {percentage}{textSuffix}
                </span>
            )}
        </div>
    );
}

export default ProgressBar;