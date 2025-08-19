import React from 'react';
import { Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Language } from '@mui/icons-material';
import EditAgentInfoButton from './EditAgentInfoButton';
import { socialMediaFormConfig } from './formConfigs';

function SocialMediaTab({ formData, handleInputChange }) {

    const socialMediaInfo = {

        'LinkedIn': {
            value: formData.linkedin,
            placeholder: 'https://linkedin.com/in/yourprofile',
            icon: <LinkedIn />,
            row: 0
        },
        'Facebook': {
            value: 'https://facebook.com/yourprofile',
            placeholder: 'https://facebook.com/yourprofile',
            icon: <Facebook />,
            row: 0
        },
        'Twitter': {
            value: formData.twitter,
            placeholder: 'https://twitter.com/yourhandle',
            icon: <Twitter />,
            row: 1
        },
        'Instagram': {
            value: formData.instagram,
            icon: <Instagram />,
            row: 1
        },

    };

    // Group items by row
    const rowItems = {};
    Object.entries(socialMediaInfo).forEach(([key, info]) => {
        if (!rowItems[info.row]) {
            rowItems[info.row] = [];
        }
        rowItems[info.row].push({ key, ...info });
    });
    const handleSave = (updatedData) => {
        console.log('Social media info updated:', updatedData);
    };

    return (
        <div className="content-section">
            <EditAgentInfoButton
                title='Social Media & Contact'
                linkPlaceHolder='Edit social media information'
                formConfig={socialMediaFormConfig}
                initialValues={formData}
                onSave={handleSave}
            />

            <Box className="info-grid">
                {/* Iterate through all rows */}
                {Object.entries(rowItems).map(([rowIndex, items]) => (
                    <div className="info-row" key={rowIndex}>
                        {items.map((item) => (
                            <div className="info-item" key={item.key}>
                                <label>{item.key}

                                </label>
                                {item.icon}
                                <div className="info-value">
                                    {item.value ? (
                                        <a
                                            href={item.value}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        // className="social-link"
                                        >
                                            <p>your profile</p>
                                        </a>
                                    ) : (
                                        <div className="info-value">
                                            {/* <span className="placeholder-text">{item.placeholder}</span> */}
                                            <p >########################</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </Box>
        </div>
    );
}

export default SocialMediaTab;