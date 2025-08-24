import React, { useState, useEffect } from 'react';
import './AgentProfile.css';
import AppBar from '../Home/components/appBar';
import Footer from '../../components/footer/footer';
import AgentProfileHeader from '../../components/Agent/AgentProfileHeader/AgentProfileHeader';
import AgentAboutSection from '../../components/Agent/AgentAboutSection/AgentAboutSection';
import AgentPropertiesTable from '../../components/Agent/AgentPropertiesTable/AgentPropertiesTable';
import AgentPromoteSection from '../../components/Agent/AgentPromoteSection/AgentPromoteSection';
import ImageUploadDialog from '../../components/imageUploadDialog/imageUploadDialog';
import { uploadAgentImage } from '../../../API/other_requests';
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

    const renderContent = () => {
        console.log("Render state - isLoading:", isLoading, "error:", error, "agent:", agent);

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

        // Transform agent data for AgentProfileHeader component
        const agentData = agent ? {
            photo: agent.profileImage || profilePlaceholder,
            name: agent.username || "Agent",
            company: agent.agency?.username || "Real Estate Agency",
            priceRange: agentProperties.length > 0 ?
                `$${Math.min(...agentProperties.map(p => p.price))}K - $${Math.max(...agentProperties.map(p => p.price))}K` :
                "No properties listed",
            salesLast12Months: agentProperties.filter(p =>
                new Date(p.createdAt) > new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
            ).length.toString(),
            totalSalesInCity: agentProperties.length.toString(),
            totalSales: agentProperties.length.toString(),
            averagePrice: agentProperties.length > 0 ?
                `$${Math.round(agentProperties.reduce((sum, p) => sum + p.price, 0) / agentProperties.length)}K` :
                "$0"
        } : null;

        // Transform agent data for AgentAboutSection component
        const agentAboutData = agent ? {
            sectionTitle: `Get to know ${agent.username || "Agent"}`,
            title: "Licensed Real Estate Agent",
            description: agent.bio || "", // Empty for now - will show placeholder
            specialties: agent.specialties || [],
            languages: agent.languages || [],
            experience: agent.yearsOfExperience ? `${agent.yearsOfExperience} Years of experience` : "Experience not specified"
        } : null;
        // Create carousel items from first 5 properties with images
        const items = agentProperties
            .filter(property => property.firstImage) // Only properties with images
            .slice(0, 5) // Take first 5
            .map(property => (
                <div key={property.id} className="carousel-item">
                    <img
                        src={property.firstImage}
                        alt={property.title || property.multi_title?.english || 'Property'}
                        className="carousel-image"
                    />
                    <div className="carousel-info">
                        <h4>{property.title || property.multi_title?.english}</h4>
                        <p>${property.price.toLocaleString()}</p>
                        <p>{property.rooms} rooms • {property.bathrooms} baths</p>
                    </div>
                </div>
            ));

        // Render main agent profile content
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
                            sectionTitle={agentAboutData.sectionTitle}
                            title={agentAboutData.title}
                            description={agentAboutData.description}
                            specialties={agentAboutData.specialties}
                            languages={agentAboutData.languages}
                            experience={agentAboutData.experience}
                            showMoreEnabled={false}
                        />
                        <AgentPropertiesTable
                            properties={agentProperties}
                            totalCount={agentProperties.length}
                        />
                    </div>
                    <div className="agent-profile-body-right">
                        <AgentPromoteSection
                            profileCompletion={25}
                            onPromotionItemClick={handlePromotionItemClick}
                        />
                    </div>
                </div>
            </>
        );
    };

    const handlePromotionItemClick = (item) => {
        console.log(`Navigate to: ${item.text}`);

        // if (item.destination !== 'dialog') {
        //     // navigate(item.page);
        //     // Link()
        // }
        // 
        if (item.dialogType === 'imageUpload') {
            setShowImageUploadDialog(true);
        }
        //! if i added more dialogs
        // else {
        //     switch (item.dialogType) {
        //         case 'imageUpload':
        //             setShowImageUploadDialog(true);
        //             break;
        //         // Add more dialog types as needed
        //         // case 'otherDialogType':
        //         //     setShowOtherDialog(true);
        //         //     break;
        //         default:
        //             console.warn(`Unknown dialog type: ${item.dialogType}`);
        //     }
        // }
    };

    // Handle image selection from the upload dialog
    const handleImageSelect = async (file) => {
        setUploadedImage(file);

        // Start upload immediately when image is selected
        try {
            // Reset progress
            setImageUploadProgress(0);

            // Assuming we have the agent ID, for now using a placeholder
            const agentId = '123'; // This would come from authentication context or props
            const result = await uploadAgentImage(file, agentId, setImageUploadProgress);

            if (result) {
                // Upload successful - close dialog after showing completion
                setTimeout(() => {
                    setShowImageUploadDialog(false);
                    setImageUploadProgress(0);
                    setUploadedImage(null);
                    // You might want to refresh the agent data here
                }, 1000); // Show 100% completion for a moment
            }
        } catch (error) {
            console.error('Failed to upload image:', error);
            setImageUploadProgress(0);
            // Handle error - show message to user
            alert('Failed to upload image. Please try again.');
        }
    };


    const handleCloseDialog = () => {
        setShowImageUploadDialog(false);
        setUploadedImage(null);
        setImageUploadProgress(0);
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