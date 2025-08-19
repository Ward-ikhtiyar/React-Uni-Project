import React, { useState } from 'react';
import './AgentAboutMe.css';
import { useNavigate } from 'react-router-dom';
import { Tabs, Tab, Box } from '@mui/material';

import GeneralInfoTab from './components/GeneralInfoTab';
import AgentInfoTab from './components/AgentInfoTab';
import BrokerageInfoTab from './components/BrokerageInfoTab';
import SocialMediaTab from './components/SocialMediaTab';
import ListingTab from './components/ListingTab';

function AgentAboutMe() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);

    const [formData, setFormData] = useState({
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

    const [availableSpecialties] = useState([
        "Buyer's Agent",
        "Listing Agent",
        "Investment Properties",
        "Military/Veterans"
    ]);

    const [availableLanguages] = useState([
        "English",
        "Spanish",
        "French",
        "German",
        "Italian",
        "Portuguese",
        "Chinese",
        "Japanese"
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSpecialtyToggle = (specialty) => {
        setFormData(prev => ({
            ...prev,
            specialties: prev.specialties.includes(specialty)
                ? prev.specialties.filter(s => s !== specialty)
                : [...prev.specialties, specialty]
        }));
    };

    const handleLanguageToggle = (language) => {
        setFormData(prev => ({
            ...prev,
            languages: prev.languages.includes(language)
                ? prev.languages.filter(l => l !== language)
                : [...prev.languages, language]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // TODO: Submit to API
        alert('Profile updated successfully!');
    };

    const handleReturnToProfile = () => {
        navigate('/AgentDetails');
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 0:
                return (
                    <GeneralInfoTab
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                );
            case 1:
                return (
                    <AgentInfoTab
                        formData={formData}
                        handleInputChange={handleInputChange}
                        handleSpecialtyToggle={handleSpecialtyToggle}
                        handleLanguageToggle={handleLanguageToggle}
                        availableSpecialties={availableSpecialties}
                        availableLanguages={availableLanguages}
                    />
                );
            case 2:
                return (
                    <BrokerageInfoTab
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                );
            case 3:
                return (
                    <SocialMediaTab
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                );
            case 4:
                return (
                    <ListingTab
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                );
            default:
                return null;
        }
    };

    
    return (
        <div className="agent-about-me-page">
            <div className="edit-profile-container">
                <div className="edit-header">
                    <button className="return-button" onClick={handleReturnToProfile}>
                        ← Return to profile
                    </button>
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
                                <Tab label="General info" />
                                <Tab label="Agent info" />
                                <Tab label="Brokerage info" />
                                <Tab label="Social media & links" />
                                <Tab label="My Listings" />
                            </Tabs>
                        </Box>
                    </div>

                    <div className="main-content">
                        {renderTabContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AgentAboutMe;