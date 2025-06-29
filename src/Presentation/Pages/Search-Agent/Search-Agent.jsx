import React from 'react';
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

const [agents, setAgents] = useState([]);
function SearchAgent() {
    async function handleGetAgents() {
        try {
        let fetchedAgents = await getAllAgencies();
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
        } 
        //     finally {
        //         // setIsLoading(false);
        // }
    }
    useEffect(() => {
        handleGetAgents();
    }, []);
    const agentTypes = [
        { label: "All", value: "" },
        { label: "Residential", value: "residential" },
        { label: "Commercial", value: "commercial" },
        { label: "Luxury", value: "luxury" },
    ];
    return (
        <div id='search-agent-page'>
            <AppBar />
            <div id='search-agent-body-warpper'>
                <div id='search-agent-header'>
                    <h2>
                        Find a real estate agent
                    </h2>
                    <div id="search-agent-location-bar">
                        <SearchBar placeholder={"City, neighborhood, or ZIP code"} />
                        <SearchBar placeholder={"Agent name"} />
                        {/* <div id='find-agent-button'> */}
                        <Button type='sumbit' variant='contained' id="find-agent-button"
                        // sx={{ padding: '1rem', backgroundColor: "#006aff", color: "white", ':hover': { backgroundColor: '#0d4599' }, minWidth: "44px", flexGrow: '1' }}
                        >
                            <Search id='search-icon' />Find agent</Button>
                        {/* </div> */}
                    </div >
                    <div className="dropdown-filter-bar">
                        <DD_Filter
                            label="Agent Type"
                            options={agentTypes}
                        // {/* // onFilterChange={handleFilterChange} */}
                        />
                        <DD_Filter
                            label="Agent Type"
                            options={agentTypes}
                        // {/* // onFilterChange={handleFilterChange} */}
                        />
                        <DD_Filter
                            label="Agent Type"
                            options={agentTypes}
                        // {/* // onFilterChange={handleFilterChange} */}
                        />
                    </div>
                </div>

                <div className="agent-grid-wrapper">
                    <A_Grid agents={agents} />
                </div>

                {/* <div className="search-agent-pagination">
                    <Pagination count={10} style={{ display: "flex", justifyContent: "center" }} />
                </div> */}
            </div>
            <Footer />
        </div>
    );
}

export default SearchAgent;
