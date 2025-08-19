import React, { useState } from 'react';
import { Box } from '@mui/material';
import EditAgentInfoButton from './EditAgentInfoButton';
import { generalInfoFormConfig } from './formConfigs';

function GeneralInfoTab({ formData, handleInputChange }) {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    
    const generalInfo = {
        FirstName: { value: formData.name || 'your name', row: 0 },
        LastName: { value: formData.lastName || 'your last name', row: 0 },
        Email: { value: formData.email || 'email', row: 1 },
        Phone: { value: formData.phone || 'phone number', row: 1 },
        AboutMe: { value: formData.aboutMe || 'about me', row: 2 }
    };

    // Group items by row (except AboutMe)
    const rowItems = {};
    Object.entries(generalInfo).forEach(([key, info]) => {
        if (key !== 'AboutMe') {
            if (!rowItems[info.row]) {
                rowItems[info.row] = [];
            }
            rowItems[info.row].push({ key, value: info.value });
        }
    });

    const handleSave = (updatedData) => {
        // Update the form data
        handleInputChange(updatedData);
        console.log('General info updated:', updatedData);
    };

    return (
        <div className="content-section">
            <EditAgentInfoButton 
                title='General information' 
                linkPlaceHolder='Edit general information'
                formConfig={generalInfoFormConfig}
                initialValues={formData}
                onSave={handleSave}
                open={isEditDialogOpen}
                onClose={() => setIsEditDialogOpen(false)}
            />

            <Box className="info-grid">
                {/* First and Second rows: iterate through grouped items */}
                {Object.entries(rowItems).map(([rowIndex, items]) => (
                    <div className="info-row" key={rowIndex}>
                        {items.map(({ key, value }) => (
                            <div className="info-item" key={key}>
                                <label>{key}</label>
                                <p>{value}</p>
                            </div>
                        ))}
                    </div>
                ))}

                {/* Third row: About Me */}
                <div className="info-row">
                    <div className="info-item full-width">
                        <label>AboutMe</label>
                        {/* <p>{generalInfo.AboutMe.value}</p> */}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab et sit nobis quae. Adipisci, molestiae. Culpa ex est reiciendis, voluptate at tempore asperiores, ducimus voluptates quas rem architecto minus.</p>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default GeneralInfoTab;