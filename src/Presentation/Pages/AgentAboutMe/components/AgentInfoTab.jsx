import { useState } from 'react';
import { TextField, FormGroup, FormControlLabel, Checkbox, Chip, Box, Grid } from '@mui/material';
import EditAgentInfoButton from './EditAgentInfoButton';
import { agencyBasicInfoFormConfig } from './formConfigs';

function AgentInfoTab({ formData}) {
    const [openDialog, setOpenDialog] = useState(false);

    // const agentInfo = {
    //     'Professional title': {
    //         value: formData.title || 'Your professional title',
    //         row: 0
    //     },
    //     'In business since': {
    //         value: 'Year started',
    //         row: 0,
    //         input: true,
    //         inputProps: {
    //             name: "experience",
    //             type: "number",
    //             placeholder: "2012"
    //         }
    //     },
    //     'Language fluency': {
    //         value: 'Select languages',
    //         input: true,
    //         row: 1,
    //         // chips: true,
    //         // chipColor: "primary",
    //         // checkboxes: true,
    //         // checkboxOptions: availableLanguages,
    //         // checkboxHandler: handleLanguageToggle,
    //     },
    //     'Specialties': {
    //         value: 'Select specialties',
    //         row: 1,
    //         // chips: true,
    //         // chipColor: "secondary",
    //         // checkboxes: true,
    //         // checkboxOptions: availableSpecialties,
    //         // checkboxHandler: handleSpecialtyToggle,
    //     }
    // };

    // Group items by row
    const rowItems = {};
    Object.entries(agencyBasicInfoFormConfig).forEach(([key, info]) => {
        if (!rowItems[info.row]) {
            rowItems[info.row] = [];
        }
        rowItems[info.row].push({ key, ...info });
    });
    const handleSave = (updatedData) => {
        console.log('Agent info updated:', updatedData);
    };
    return (
        <div className="content-section">
            <EditAgentInfoButton
                title='Agent Information'
                linkPlaceHolder='Edit agent information'
                formConfig={agencyBasicInfoFormConfig}
                initialValues={formData}
                onSave={handleSave}
            />
            <Box className="info-grid">
                {/* Iterate through all rows */}
                {Object.entries(rowItems).map(([rowIndex, items]) => (
                    <div className="info-row" key={rowIndex}>
                        {items.map((item) => (
                            <div className="info-item" key={item.key}>
                                <label>{item.name}</label>
                                <div className="info-value">
                                    <p>
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </Box>
        </div>
    );
}

export default AgentInfoTab;