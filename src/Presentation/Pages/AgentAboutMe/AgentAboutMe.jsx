import  { use, useEffect, useState } from 'react';
import './AgentAboutMe.css';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';
import AgentInfoTab from './components/AgentInfoTab';
import ListingTab from './components/ListingTab';
import AddPropertyTab from '../Profile/addProperty/addProperty';
import React from 'react';
import { getAgentProperties } from '../../../API/requests';


function AgentAboutMe() {

    const [activeTab, setActiveTab] = useState(0);
    const [open, setopen] = useState(false);
    const [agent, setAgent] = useState();
    const [agentProperties, setAgentProperties] = useState([]);

    async function fetchAgentData() {
            try {
                setIsLoading(true);
                setError(null);
    
                let agentData = await getProfile();
    
                if (!agentData) {
                    setAgent(null);
                } else {
                    // Use the refactored data structure
                    const agentDataRefactored = {
                        photo: agentData.profileImage || profilePlaceholder,
                        name: agentData.username || "Agent temp Name",
                        company: agentData.agencyInfo?.agencyName || "Agency temp Name",
                        location: agentData.location?.address || "Location not specified",
                        commissionRate: agentData.agencyInfo?.agencyCommissionRate || 1.0,
                        views: agentData.agencyInfo?.agencyViews || 11110,
                        votes: agentData.agencyInfo?.agencyVotes || 11110,
                        isVerified: agentData.isAccountVerified || false,
                        age: agentData.age || 1800,
                        language: agentData.language || "english",
                        createdAt: agentData.createdAt || new Date(),
                        // Keep original data as well
                        ...agentData
                    };
    
                    setAgent(agentDataRefactored);
                    console.log("Agent state updated with refactored data:", agentDataRefactored);
                }
    
                // Fetch agent properties (uncomment when ready to use)
                const propertiesData = await getAgentAcceptedProperties();
                // console.log("Properties data received:", propertiesData);
                if (propertiesData) {
                    setAgentProperties(propertiesData);
                }
    
            } catch (error) {
                console.error("Failed to fetch agent data:", error);
                setError("Failed to load agent information. Please try again later.");
                // setAgent(null);
            } finally {
                setIsLoading(false);
            }
        }

    useEffect(() => {
        fetchAgentData();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', agentData);
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
                        agentData={agent}
                    />
                );


            case 1:
                return (
                    <ListingTab
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
            <Box className="edit-profile-container" sx={{ maxWidth: activeTab === 2 ? null : 1200 }} >
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