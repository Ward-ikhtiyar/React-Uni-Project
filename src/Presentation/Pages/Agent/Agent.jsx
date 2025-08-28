import React, { useState, useEffect } from 'react';
import './Agent.css'
import AppBar from '../Home/components/appBar';
import Footer from '../../components/footer/footer';
import AgentProfileHeader from '../../components/Agent/AgentProfileHeader/AgentProfileHeader';
import AgentContactForm from '../../components/Agent/AgentContactForm/AgentContactForm';
import AgentPropertiesTable from '../../components/Agent/AgentPropertiesTable/AgentPropertiesTable';
import AgentAboutSection from '../../components/Agent/AgentAboutSection/AgentAboutSection';
import { getAgentById, getAgentProperties } from '../../../API/requests';
import { useSearchParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import profilePlaceholder from '../../../../public/assets/images/Profile_avatar_placeholder.png';

function AgentDialog() {
    const [params] = useSearchParams();
    const [agent, setAgent] = useState(null);
    const [agentProperties, setAgentProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const agentId = params.get("id");

    //! unused though it would be used
    // const handleContactSubmit = (formData) => {
    //     console.log('Contact form submitted:', formData);
    //     // TODO: Implement API call to submit contact form
    // };

    // const items = agentProperties
    //     .filter(property => property.firstImage)
    //     .slice(0, 5)
    //     .map(property => (
    //         <div key={property.id} className="carousel-item">
    //             <img
    //                 src={property.firstImage}
    //                 alt={property.title || property.multi_title?.english || 'Property'}
    //                 className="carousel-image"
    //             />
    //             {/* <div className="carousel-info">
    //                 <h4>{property.title || property.multi_title?.english}</h4>
    //                 <p>${property.price.toLocaleString()}</p>
    //                 <p>{property.rooms} rooms • {property.bathrooms} baths</p>
    //             </div> */}
    //         </div>
    //     ));

    async function fetchAgentData() {
        try {
            setIsLoading(true);
            setError(null);

            // Check if agentId exists
            if (!agentId) {
                setError("No agent ID provided");
                setAgent(null);
                return;
            }

            console.log("Fetching agent data for ID:", agentId);

            const agentData = await getAgentById(agentId);
            console.log("Agent data received:", agentData);

            if (!agentData || agentData === null) {
                setAgent(null);
            } else {
                const agentDataRefactored = {
                    photo: agent.profileImage || profilePlaceholder,
                    name: agent.username || "Agent Name",
                    company: agent.agencyInfo?.agencyName || "Agency Name",
                    location: agent.location?.address || "Location not specified",
                    commissionRate: agent.agencyInfo?.agencyCommissionRate || 1.0,
                    views: agent.agencyInfo?.agencyViews || 0,
                    votes: agent.agencyInfo?.agencyVotes || 0,
                    isVerified: agent.isAccountVerified || false,
                    age: agent.age || 18,
                    language: agent.language || "english",
                    createdAt: agent.createdAt || new Date()
                };
                setAgent(agentDataRefactored);
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
    }, [agentId]);



    const renderContent = () => {
        // console.log("Render state - isLoading:", isLoading, "error:", error, "agent:", agent);

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
                <div className="error-container">
                    <div className="error-icon">⚠️</div>
                    <Typography variant="h6" className="error-text">
                        {error}
                    </Typography>
                    <Typography variant="body2" className="error-suggestion">
                        Please try again later or contact support if the problem persists.
                    </Typography>
                </div>
            );
        }

        if (!agent || agent === null) {
            return (
                <div className="no-data-container">
                    <div className="no-data-icon">👤</div>
                    <Typography variant="h6" className="no-data-text">
                        Agent Not Found
                    </Typography>
                    <Typography variant="body2" className="no-data-subtext">
                        The requested agent could not be found.
                    </Typography>
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
                            sectionTitle={`Get to know ${agentData.name}`}
                            title={`Real Estate Agent - ${agentData.company}`}
                            description={agent.bio || `${agentData.name} is a professional real estate agent based in ${agentData.location}. With ${agentData.views} profile views, this agent has established a presence in the local real estate market. The agency operates with a commission rate of ${agentData.commissionRate}% and has received ${agentData.votes} votes from clients.`}
                            languages={agent.languages || [agentData.language === "arabic" ? "Arabic" : "English"]}
                            experience={`${new Date().getFullYear() - new Date(agentData.createdAt).getFullYear()} Years of experience`}
                            showMoreEnabled={true}
                        />
                        <AgentPropertiesTable
                            properties={agentProperties}
                            totalCount={agentProperties.length}
                        />
                    </div>
                    <div className="agent-profile-body-right">
                        {/* delete it, if you got the backend ready */}
                        <AgentContactForm
                            onSubmit={handleContactSubmit}
                            buttonText="Contact the agent"
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
        </div>
    );
}

export default AgentDialog;
