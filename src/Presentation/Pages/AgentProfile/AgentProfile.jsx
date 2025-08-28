import React, { useState, useEffect } from 'react';
import './AgentProfile.css';
import AppBar from '../Home/components/appBar';
import Footer from '../../components/footer/footer';
import AgentProfileHeader from '../../components/Agent/AgentProfileHeader/AgentProfileHeader';
import AgentAboutSection from '../../components/Agent/AgentAboutSection/AgentAboutSection';
import AgentPropertiesTable from '../../components/Agent/AgentPropertiesTable/AgentPropertiesTable';
import AgentPromoteSection from '../../components/Agent/AgentPromoteSection/AgentPromoteSection';
import ImageUploadDialog from '../../components/imageUploadDialog/imageUploadDialog';
import { getProfile, uploadAgentImage } from '../../../API/other_requests';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { getAgentProperties } from '../../../API/requests';
import { getOwnerInfo } from '../../../API/other_requests';
import { Typography } from '@mui/material';
import profilePlaceholder from '../../../../public/assets/images/Profile_avatar_placeholder.png';


function AgentProfile() {
    const navigate = useNavigate();


    const [showImageUploadDialog, setShowImageUploadDialog] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const [imageUploadProgress, setImageUploadProgress] = useState(0);

    const [agent, setAgent] = useState(null);
    const [agentProperties, setAgentProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const handleImageSelect = async (file) => {
        setUploadedImage(file);

        try {
            setImageUploadProgress(0);

            // Assuming we have the agent ID, for now using a placeholder
            // this is cracked
            const agentId = '123';
            const result = await uploadAgentImage(file, agentId, setImageUploadProgress);

            if (result) {
                // Upload successful - close dialog after showing completion
                setTimeout(() => {
                    setShowImageUploadDialog(false);
                    setImageUploadProgress(0);
                    setUploadedImage(null);
                }, 1000);
            }
        } catch (error) {
            console.error('Failed to upload image:', error);
            setImageUploadProgress(0);
            alert('Failed to upload image. Please try again.');
        }
    };


    const handleCloseDialog = () => {
        setShowImageUploadDialog(false);
        setUploadedImage(null);
        setImageUploadProgress(0);
    };


    async function fetchAgentData() {
        try {
            setIsLoading(true);
            setError(null);


            const agentData = await getProfile();
            console.log("Owner data received:", agentData);

            if (!agentData || (typeof agentData === 'object' && Object.keys(agentData).length === 0)) {
                setAgent(null);
            } else {
                setAgent(agentData);
            }

            // Fetch agent properties
            const propertiesData = await getAgentProperties(agentId);
            console.log("Properties data received:", propertiesData);

            if (propertiesData) {
                setAgentProperties(propertiesData);
            }

        } catch (error) {
            console.error("Failed to fetch agent data:", error);
            setError("Failed to load agent information. Please try again later.");
            setAgent(null);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchAgentData();
    }, []);

    // this might be optimal be it should work
    const agentData = {
        // photo: agent.profileImage || {profilePlaceholder},
        // name: agent.username || "Agent Name",
        // company: agent.agencyInfo?.agencyName || "Agency Name",
        // location: agent.location?.address || "Location not specified",
        // commissionRate: agent.agencyInfo?.agencyCommissionRate || 1.0,
        // views: agent.agencyInfo?.agencyViews || 0,
        // votes: agent.agencyInfo?.agencyVotes || 0,
        // isVerified: agent.isAccountVerified || false,
        // age: agent.age || 18,
        // language: agent.language || "english",
        // createdAt: agent.createdAt || new Date()
    };

    const renderContent = () => {

        if (isLoading) {
            return (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <Typography variant="h6" className="loading-text">
                        Loading agent information...
                    </Typography>
                </div>
            );
        }

        if (error) {
            return (
                <div className="agent-profile-body">

                    <div className="error-container">
                        <div className="error-icon">⚠️</div>
                        <Typography variant="h6" className="error-text">
                            {error}
                        </Typography>
                        <Typography variant="body2" className="error-suggestion">
                            Please try again later or contact support if the problem persists.
                        </Typography>
                    </div>
                </div>
            );
        }

        if (!agent || agent === null) {
            return (
                <div className="agent-profile-body">

                    <div className="no-data-container">
                        <div className="no-data-icon">👤</div>
                        <Typography variant="h6" className="no-data-text">
                            Agent Not Found
                        </Typography>
                        <Typography variant="body2" className="no-data-subtext">
                            The requested agent could not be found.
                        </Typography>
                    </div>
                </div>
            );
        }


        return (
            <>
                <AgentProfileHeader
                    agentData={agentData}
                    carouselItems={items}
                    scrollTargetId="properties-list"
                />

                <div className="agent-profile-body">
                    <div className="agent-profile-body-left">
                        <AgentAboutSection
                            showMoreEnabled={false}
                        />
                        <AgentPropertiesTable
                            properties={agentProperties}
                            totalCount={agentProperties.length}
                        />
                    </div>
                    <div className="agent-profile-body-right">
                        <AgentPromoteSection
                            onPromotionItemClick={handlePromotionItemClick}
                        />
                    </div>
                </div>
            </>
        );
    };





    return (
        <div className="agent-profile-page">
            <AppBar />
            <div className="agent-profile-wrapper">
                {renderContent()}
            </div>
            <Footer />

            <ImageUploadDialog
                isOpen={showImageUploadDialog}
                uploadedImage={uploadedImage}
                imageUploadProgress={imageUploadProgress}
                onImageSelect={handleImageSelect}
                onClose={handleCloseDialog}
            />
        </div>
    );
}

export default AgentProfile;