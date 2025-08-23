import React, { use, useState } from 'react';
import './AgentAboutMe.css';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';

// import GeneralInfoTab from './components/GeneralInfoTab';
import AgentInfoTab from './components/AgentInfoTab';
// import BrokerageInfoTab from './components/BrokerageInfoTab';
// import SocialMediaTab from './components/SocialMediaTab';
import ListingTab from './components/ListingTab';
import AddPropertyTab from '../Profile/addProperty/addProperty';
import { div, style } from 'framer-motion/client';
import { WidthFull } from '@mui/icons-material';


function AgentAboutMe() {

    const [activeTab, setActiveTab] = useState(0);
    const [open, setopen] = useState(false);
    const [agentData, setagentData] = useState({
        // General Info
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        aboutMe: '',

        // Agent Info
        specialties: [],
        languages: [],
        experience: '',
        professionalTitle: 'Licensed Salesperson',

        // Brokerage Info
        company: '',
        officePhone: '',
        officeAddress: '',
        officeCity: '',
        officeState: '',

        // Social Media
        website: '',
        linkedin: '',
        facebook: '',
        twitter: '',
        instagram: '',
        otherLink: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', agentData);
        // TODO: Submit to API
        alert('Profile updated successfully!');
    };


    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <AgentInfoTab
                        agentData={agentData}
                    />
                );


            case 1:
                return (
                    <ListingTab
                        agentData={agentData}
                    />
                );
            case 2:
                return (
                    <div className="add-Property-agent">

                    <AddPropertyTab
                        open={open}
                        setOpen={setopen}
                        />
                        </div>
                );
            default:
                return null;
        }
    };


    return (
        <div className="agent-about-me-page">
            <Box className="edit-profile-container" sx={{maxWidth: activeTab===2 ? null: 1200}} >
                <div className="edit-header">
                    <Link to="/AgentDetails" className="return-button">
                        ← Return to profile
                    </Link>
                    <h1>Edit profile</h1>
                </div>

                <div className="edit-content">
                    <div className="sidebar">
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs
                                value={activeTab}
                                onChange={handleTabChange}
                                orientation="vertical"
                                variant="scrollable"
                                sx={{
                                    '& .MuiTab-root': {
                                        alignItems: 'flex-start',
                                        textAlign: 'left',
                                        minHeight: 48,
                                        fontSize: '0.9rem'
                                    }
                                }}
                            >
                                <Tab label="Agent info" />
                                <Tab label="My Listings" />
                                <Tab label="Add Property" />
                            </Tabs>
                        </Box>
                    </div>

                    <div className="main-content">
                        {renderTabContent()}
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default AgentAboutMe;