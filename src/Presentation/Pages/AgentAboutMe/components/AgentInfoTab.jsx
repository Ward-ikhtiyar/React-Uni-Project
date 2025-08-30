import { useState } from 'react';
import { TextField, FormGroup, FormControlLabel, Checkbox, Chip, Box, Grid } from '@mui/material';
import EditAgentInfoButton from './EditAgentInfoButton';
import { agencyBasicInfoFormConfig } from './formConfigs';

function AgentInfoTab({agentData}) {
    // const [openDialog, setOpenDialog] = useState(false);
    // const [agentData, setagentData] = useState(null)

    //  async function fetchAgentData() {
    //         try {
    //             // setIsLoading(true);
    //             // setError(null);
    
    
    //             const agentData = await getProfile();
    //             console.log("Owner data received:", agentData);
    
    //             if (!agentData || (typeof agentData === 'object' && Object.keys(agentData).length === 0)) {
    //                 setagentData(null);
    //             } else {
    //                 setagentData(agentData);
    //             }
    
                
    
    //         } catch (error) {
    //             console.error("Failed to fetch agent data:", error);
    //             setagentData(null);
    //         } 
    //     }
    
    //     useEffect(() => {
    //         fetchAgentData();
    //     }, []);
    
    
    

    const rowItems = {};
    Object.entries(agencyBasicInfoFormConfig).forEach(([key, info]) => {
        if (!rowItems[info.row]) {
            rowItems[info.row] = [];
        }
        rowItems[info.row].push({ key, ...info });
    });
    const handleSave = (updatedData) => {
        // update agent information api call, non existing?
        console.log('Agent info updated:', updatedData);
    };
    return (
        <div className="content-section">
            <EditAgentInfoButton
                title='Agent Information'
                linkPlaceHolder='Edit agent information'
                formConfig={agencyBasicInfoFormConfig}
                initialValues={agentData}
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
                                        {agentData.item.name}
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