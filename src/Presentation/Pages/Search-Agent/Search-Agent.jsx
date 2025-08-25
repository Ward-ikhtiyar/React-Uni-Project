import React, { useState, useEffect } from 'react';
import './Search-Agent.css'
import AppBar from '../Home/components/appBar'
import Footer from '../../components/footer/footer';
import A_Grid from './components/A-Listing/A-Grid';
import { Button, Pagination } from '@mui/material';
import { Search } from '@mui/icons-material';
import SearchBar from '../../components/SearchBar/SearchBar';
import DD_Filter from './components/DD-Filter/DD-Filter';
import AgentDialog from '../Agent/Agent';
import { getAllAgencies } from '../../../API/requests';

function SearchAgent() {
    const [agents, setAgents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchedUsername, setSearchedUsername] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredAgents, setFilteredAgents] = useState([]);
    const cardsPerPage = 20;

    const handleSearch = (e) => {
        setSearchedUsername(e.target.value);
    };

    // Mock data to demonstrate the updated card structure
    const mockAgents = [
        {
            id: 1,
            phone: "01234567890",
            username: "Ahmed Real Estate",
            age: 28,
            userType: "agency",
            isAccountVerified: true,
            createdAt: new Date("2023-01-15"),
            updatedAt: new Date("2024-01-20"),
            profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
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
                createdAt: new Date("2023-01-15")
            }
        },
        {
            id: 2,
            phone: "01234567891",
            username: "Sara Properties",
            age: 32,
            userType: "agency",
            isAccountVerified: false,
            createdAt: new Date("2023-03-10"),
            updatedAt: new Date("2024-01-18"),
            profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            hasUsedTrial: true,
            token: "mock_token_2",
            language: "english",
            location: {
                latitude: 25.2048,
                longitude: 55.2708,
                address: "Dubai, UAE"
            },
            agencyInfo: {
                user_id: 2,
                docImages: ["doc3.jpg"],
                agencyCommissionRate: 1.8,
                agencyVotes: 23,
                agencyViews: 850,
                createdAt: new Date("2023-03-10")
            }
        },
        {
            id: 3,
            phone: "01234567892",
            username: "Mohammed & Co",
            age: 35,
            userType: "agency",
            isAccountVerified: true,
            createdAt: new Date("2022-11-05"),
            updatedAt: new Date("2024-01-22"),
            profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            hasUsedTrial: false,
            token: "mock_token_3",
            language: "arabic",
            location: {
                latitude: 24.7136,
                longitude: 46.6753,
                address: "Riyadh, Saudi Arabia"
            },
            agencyInfo: {
                user_id: 3,
                docImages: ["doc4.jpg", "doc5.jpg", "doc6.jpg"],
                agencyCommissionRate: 3.0,
                agencyVotes: 67,
                agencyViews: 2100,
                createdAt: new Date("2022-11-05")
            }
        },
        // Adding more mock data to demonstrate pagination
        ...Array.from({ length: 25 }, (_, i) => ({
            id: i + 4,
            phone: `0123456789${i + 3}`,
            username: `Agent ${i + 4}`,
            age: 25 + (i % 15),
            userType: "agency",
            isAccountVerified: i % 2 === 0,
            createdAt: new Date("2023-01-15"),
            updatedAt: new Date("2024-01-20"),
            profileImage: `https://images.unsplash.com/photo-${1500000000000 + i}?w=150&h=150&fit=crop&crop=face`,
            hasUsedTrial: i % 3 === 0,
            token: `mock_token_${i + 4}`,
            language: i % 2 === 0 ? "arabic" : "english",
            location: {
                latitude: 30.0444 + (i * 0.1),
                longitude: 31.2357 + (i * 0.1),
                address: `Location ${i + 4}`
            },
            agencyInfo: {
                user_id: i + 4,
                docImages: [`doc${i + 4}.jpg`],
                agencyCommissionRate: 1.5 + (i % 3) * 0.5,
                agencyVotes: 10 + (i * 5),
                agencyViews: 500 + (i * 100),
                createdAt: new Date("2023-01-15")
            }
        }))
    ];

    async function handleGetAgents() {
        try {
            setIsLoading(true);
            setError(null);
            let fetchedAgents = await getAllAgencies(searchedUsername);
            setAgents(fetchedAgents);
        } catch (error) {
            console.error('Error fetching agents:', error);
            if (error.statusCode === 404 && error.message === "No agents found") {
                // Handle 404 - no agents available
                setAgents([]);
                setError("No agents are currently available.");
            } else {
                // Other errors
                setError("Error loading agents. Please try again later.");
                setAgents([]);
            }
        } finally {
            setIsLoading(false);
        }
    }

    // Filter agents based on search
    useEffect(() => {
        if (searchedUsername.trim() === "") {
            setFilteredAgents(agents);
        } else {
            const filtered = agents.filter(agent => 
                agent.username.toLowerCase().includes(searchedUsername.toLowerCase())
            );
            setFilteredAgents(filtered);
        }
        setCurrentPage(1); // Reset to first page when filtering
    }, [agents, searchedUsername]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredAgents.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentAgents = filteredAgents.slice(startIndex, endIndex);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        // Use mock data for demonstration
        setAgents(mockAgents);
        setIsLoading(false);
        
        // Uncomment the line below to use real API data
        // handleGetAgents();
    }, []);

    // const agentTypes = [
    //     { label: "All", value: "" },
    //     { label: "Residential", value: "residential" },
    //     { label: "Commercial", value: "commercial" },
    //     { label: "Luxury", value: "luxury" },
    // ];
    return (
        <div id='search-agent-page'>
            <AppBar />
            <div id='search-agent-body-warpper'>
                <div id='search-agent-header'>
                    <h2>
                        Find a real estate agent
                    </h2>
                    <div id="search-agent-location-bar">
                        <SearchBar placeholder={"Agent name"} onChange={handleSearch} />
                        {/* <div id='find-agent-button'> */}
                        <Button type='sumbit' variant='contained' id="find-agent-button" onClick={handleGetAgents}
                        // sx={{ padding: '1rem', backgroundColor: "#006aff", color: "white", ':hover': { backgroundColor: '#0d4599' }, minWidth: "44px", flexGrow: '1' }}
                        >
                            <Search id='search-icon' />Find agent</Button>
                        {/* </div> */}
                    </div >

                </div>

                <div className="agent-grid-wrapper">
                    <A_Grid agents={currentAgents} isLoading={isLoading} error={error} />
                </div>

                {!isLoading && !error && filteredAgents.length > 0 && (
                    <div className="search-agent-pagination">
                        <Pagination 
                            count={totalPages} 
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                            size="large"
                            style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }} 
                        />
                        <div className="pagination-info">
                            Showing {startIndex + 1}-{Math.min(endIndex, filteredAgents.length)} of {filteredAgents.length} agents
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default SearchAgent;
