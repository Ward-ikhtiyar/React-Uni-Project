import React, { useState, useEffect } from 'react';
import './Agent.css'
import AppBar from '../Home/components/appBar';
import Footer from '../../components/footer/footer';
import AgentProfileHeader from '../../components/AgentProfileHeader/AgentProfileHeader';
import AgentContactForm from '../../components/AgentContactForm/AgentContactForm';
import AgentPropertiesTable from '../../components/AgentPropertiesTable/AgentPropertiesTable';
import AgentAboutSection from '../../components/AgentAboutSection/AgentAboutSection';
import { getAgentById, getAgentAcceptedProperties } from '../../../API/requests';
import { useSearchParams } from 'react-router-dom';
import { Typography } from '@mui/material';

function AgentDialog() {
    const [params] = useSearchParams();
    const [agent, setAgent] = useState(null);
    const [agentProperties, setAgentProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const agentId = params.get("id");

    const handleContactSubmit = (formData) => {
        console.log('Contact form submitted:', formData);
        // TODO: Implement API call to submit contact form
    };

    // Mock data for demonstration
    const mockAgent = {
        id: 1,
        phone: "01234567890",
        username: "Ahmed Real Estate",
        age: 28,
        userType: "agency",
        isAccountVerified: true,
        createdAt: new Date("2020-03-15"), // 4 years ago for better experience calculation
        updatedAt: new Date("2024-01-20"),
        profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
        hasUsedTrial: false,
        token: "mock_token_1",
        language: "arabic",
        location: {
            latitude: 30.0444,
            longitude: 31.2357,
            address: "Cairo, Egypt"
        },
        agencyInfo: {
            user_id: 1,
            docImages: ["doc1.jpg", "doc2.jpg"],
            agencyCommissionRate: 2.5,
            agencyVotes: 45,
            agencyViews: 1200,
            createdAt: new Date("2020-03-15")
        }
    };

    // Mock properties using the AgencyProperty shape
    const mockProperties = [
        {
            id: 101,
            multi_title: {
                english: "Modern Apartment in Downtown",
                arabic: "شقة حديثة في وسط البلد"
            },
            rooms: 3,
            bathrooms: 2,
            primacy: 85,
            createdAt: new Date("2024-07-01"),
            area: 120,
            price: 250000,
            firstImage: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c1a9?w=1200&auto=format&fit=crop&q=60",
            status: "accepted",
            isForRent: false,
            propertyType: "apartment",
            location: {
                country: "Egypt",
                governorate: "Cairo",
                city: "Nasr City",
                quarter: "District 8",
                street: "Abbas El Akkad",
                lon: 31.3386,
                lat: 30.0677
            },
            agency: { username: "Ahmed Real Estate" },
            favorites: [{ id: 1 }, { id: 2 }],
            voteScore: 4.6,
            viewCount: 1200,
            propertyCommissionRate: 2.5,
            commissionPaid: true,
            acceptCount: 3,
            updatedAt: new Date("2024-08-10")
        },
        {
            id: 102,
            multi_title: {
                english: "Cozy Family House",
                arabic: "منزل عائلي مريح"
            },
            rooms: 4,
            bathrooms: 3,
            primacy: 78,
            createdAt: new Date("2024-06-20"),
            area: 220,
            price: 450000,
            firstImage: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1200&auto=format&fit=crop&q=60",
            status: "accepted",
            isForRent: false,
            propertyType: "house",
            location: {
                country: "Egypt",
                governorate: "Giza",
                city: "6th of October",
                quarter: "Beverly Hills",
                street: "Palm Street",
                lon: 30.987,
                lat: 29.987
            },
            agency: { username: "Ahmed Real Estate" },
            favorites: [{ id: 3 }],
            voteScore: 4.8,
            viewCount: 980,
            propertyCommissionRate: 2,
            commissionPaid: false,
            acceptCount: 7,
            updatedAt: new Date("2024-08-05")
        },
        {
            id: 103,
            multi_title: {
                english: "Luxury Penthouse with City View",
                arabic: "بنتهاوس فاخر بإطلالة على المدينة"
            },
            rooms: 5,
            bathrooms: 4,
            primacy: 92,
            createdAt: new Date("2024-05-15"),
            area: 350,
            price: 1200000,
            firstImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200&auto=format&fit=crop&q=60",
            status: "accepted",
            isForRent: false,
            propertyType: "penthouse",
            location: {
                country: "Egypt",
                governorate: "Cairo",
                city: "New Cairo",
                quarter: "Fifth Settlement",
                street: "90th Street",
                lon: 31.41,
                lat: 29.97
            },
            agency: { username: "Ahmed Real Estate" },
            favorites: [],
            voteScore: 4.9,
            viewCount: 2100,
            propertyCommissionRate: 3,
            commissionPaid: true,
            acceptCount: 12,
            updatedAt: new Date("2024-08-18")
        },
        {
            id: 104,
            multi_title: {
                english: "Affordable Studio Near Metro",
                arabic: "استوديو بسعر مناسب بالقرب من المترو"
            },
            rooms: 1,
            bathrooms: 1,
            primacy: 60,
            createdAt: new Date("2024-08-01"),
            area: 45,
            price: 80000,
            firstImage: null,
            status: "pending",
            isForRent: true,
            propertyType: "studio",
            location: {
                country: "Egypt",
                governorate: "Cairo",
                city: "Heliopolis",
                quarter: "Korba",
                street: "Baghdad Street",
                lon: 31.332,
                lat: 30.088
            },
            agency: { username: "Ahmed Real Estate" },
            favorites: [{ id: 5 }],
            voteScore: 4.1,
            viewCount: 430,
            propertyCommissionRate: 1.5,
            commissionPaid: false,
            acceptCount: 0,
            updatedAt: new Date("2024-08-19")
        },
        {
            id: 105,
            multi_title: {
                english: "Beachfront Chalet",
                arabic: "شاليه على الشاطئ"
            },
            rooms: 2,
            bathrooms: 2,
            primacy: 74,
            createdAt: new Date("2024-07-10"),
            area: 95,
            price: 320000,
            firstImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&auto=format&fit=crop&q=60",
            status: "accepted",
            isForRent: false,
            propertyType: "chalet",
            location: {
                country: "Egypt",
                governorate: "Red Sea",
                city: "Hurghada",
                quarter: "Sahl Hasheesh",
                street: "Marina Walk",
                lon: 33.8106,
                lat: 27.1809
            },
            agency: { username: "Ahmed Real Estate" },
            favorites: [{ id: 7 }, { id: 8 }, { id: 9 }],
            voteScore: 4.7,
            viewCount: 1500,
            propertyCommissionRate: 2.2,
            commissionPaid: true,
            acceptCount: 5,
            updatedAt: new Date("2024-08-16")
        },
        {
            id: 106,
            multi_title: {
                english: "Commercial Office Space",
                arabic: "مساحة مكتب تجارية"
            },
            rooms: 6,
            bathrooms: 2,
            primacy: 70,
            createdAt: new Date("2024-06-05"),
            area: 400,
            price: 950000,
            firstImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=60",
            status: "accepted",
            isForRent: false,
            propertyType: "office",
            location: {
                country: "Egypt",
                governorate: "Alexandria",
                city: "Alexandria",
                quarter: "Smouha",
                street: "Freedom Avenue",
                lon: 29.9187,
                lat: 31.2156
            },
            agency: { username: "Ahmed Real Estate" },
            favorites: [],
            voteScore: 4.3,
            viewCount: 620,
            propertyCommissionRate: 2.8,
            commissionPaid: false,
            acceptCount: 2,
            updatedAt: new Date("2024-08-02")
        }
    ];

    useEffect(() => {
        async function fetchAgentData() {
            try {
                setIsLoading(true);
                setError(null);

                // Use mock data for demonstration
                setAgent(mockAgent);

                // Map mock properties to the shape expected by AgentPropertiesTable
                const preferredLanguage = (mockAgent.language === "arabic") ? "arabic" : "english";
                const displayProperties = mockProperties.map((p) => {
                    const address = `${p.location.street}, ${p.location.quarter}, ${p.location.city}`;
                    const city = `${p.location.governorate}, ${p.location.country}`;
                    return {
                        id: p.id,
                        image: p.firstImage || "/assets/images/propertyPlaceholder.png",
                        address,
                        city,
                        beds: p.rooms,
                        baths: p.bathrooms,
                        price: `$${p.price.toLocaleString()}`,
                        // Optionally expose original data if needed later
                        _title: p.multi_title[preferredLanguage] || p.title || Object.values(p.multi_title)[0],
                        _status: p.status,
                        _isForRent: p.isForRent,
                        _propertyType: p.propertyType
                    };
                });
                setAgentProperties(displayProperties);

                // Uncomment the lines below to use real API data for agent
                // const agentData = await getAgentById(agentId);
                // if (!agentData || (typeof agentData === 'object' && Object.keys(agentData).length === 0)) {
                //     setAgent(null);
                // } else {
                //     setAgent(agentData);
                // }

            } catch (error) {
                console.error("Failed to fetch agent data:", error);
                setError("Failed to load agent information. Please try again later.");
                setAgent(null);
            } finally {
                setIsLoading(false);
            }
        }

        fetchAgentData();
    }, [agentId]);

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

        // Use agent data from AgencyUser interface
        const agentData = {
            photo: agent.profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s",
            name: agent.username || "Agent Name",
            company: agent.agencyInfo?.agencyName || "Agency Name",
            location: agent.location?.address || "Location not specified",
            commissionRate: agent.agencyInfo?.agencyCommissionRate || 1.0,
            views: agent.agencyInfo?.agencyViews || 0,
            votes: agent.agencyInfo?.agencyVotes || 0,
            isVerified: agent.isAccountVerified || false,
            age: agent.age || 18,
            language: agent.language || "arabic",
            createdAt: agent.createdAt || new Date()
        };

        // Create carousel items from agent photo
        const items = [
            <img
                src={agentData.photo}
                alt="Agent"
                className="carsouel-item"
            />,
            <img
                src={agentData.photo}
                alt="Agent"
                className="carsouel-item"
            />,
            <img
                src={agentData.photo}
                alt="Agent"
                className="carsouel-item"
            />
        ];

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
                            sectionTitle={`Get to know ${agentData.name}`}
                            title={`Real Estate Agent - ${agentData.company}`}
                            description={`${agentData.name} is a professional real estate agent based in ${agentData.location}. With ${agentData.age} years of age and ${agentData.views} profile views, this agent has established a strong presence in the local real estate market. The agency operates with a commission rate of ${agentData.commissionRate}% and has received ${agentData.votes} votes from satisfied clients. As a dedicated real estate professional, ${agentData.name} specializes in residential properties, commercial real estate, and investment opportunities throughout ${agentData.location}. With a proven track record of successful transactions and a deep understanding of the local market dynamics, this agent provides personalized service to buyers, sellers, and investors. The agency's commitment to excellence is reflected in their high client satisfaction rate and positive reviews from the community. Whether you're looking to buy your first home, sell an existing property, or invest in real estate, ${agentData.name} offers comprehensive guidance and professional expertise to help you achieve your real estate goals.`}
                            languages={[agentData.language === "arabic" ? "Arabic" : "English", "French", "Spanish"]}
                            experience={`${new Date().getFullYear() - new Date(agentData.createdAt).getFullYear()} Years of experience`}
                            showMoreEnabled={true}
                        />
                        <AgentPropertiesTable
                            properties={agentProperties}
                            totalCount={agentProperties.length}
                        />
                    </div>
                    <div className="agent-profile-body-right">
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
