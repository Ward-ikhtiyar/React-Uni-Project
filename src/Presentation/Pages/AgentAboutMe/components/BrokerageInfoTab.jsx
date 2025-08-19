import React from 'react';
import { Box } from '@mui/material';
import EditAgentInfoButton from './EditAgentInfoButton';
import { brokerageInfoFormConfig } from './formConfigs';

function BrokerageInfoTab({ formData }) {
    const brokerageInfo = {
        'Company Name': {
            value: formData.company || 'Your company name',
            row: 0
        },
        'Office Phone': {
            value: formData.officePhone || 'Office phone number',
            row: 0
        },
        'Office Address': {
            value: formData.officeAddress || 'Office address',
            fullWidth: true,
            row: 1
        },
        'City': {
            value: formData.officeCity || 'City',
            row: 2
        },
        'State': {
            value: formData.officeState || 'State',
            row: 2
        }
    };

    // Group items by row
    const rowItems = {};
    Object.entries(brokerageInfo).forEach(([key, info]) => {
        if (!rowItems[info.row]) {
            rowItems[info.row] = [];
        }
        rowItems[info.row].push({ key, ...info });
    });
    const handleSave = (updatedData) => {
        // Update the form data
        console.log('Brokerage info updated:', updatedData);
    };
    return (
        <div className="content-section">
            <EditAgentInfoButton
                title='Brokerage information'
                linkPlaceHolder='Edit brokerage information'
                formConfig={brokerageInfoFormConfig}
                initialValues={formData}
                onSave={handleSave}
            />
            <Box className="info-grid">
                {/* Iterate through all rows */}
                {Object.entries(rowItems).map(([rowIndex, items]) => (
                    <div className="info-row" key={rowIndex}>
                        {items.map((item) => (
                            <div
                                className={`info-item ${item.fullWidth ? 'full-width' : ''}`}
                                key={item.key}
                            >
                                <label>{item.key}</label>
                                <p>{item.value}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </Box>
        </div>
    );
}

export default BrokerageInfoTab;