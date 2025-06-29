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

function SearchAgent() {
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
                    <A_Grid />
                </div>

                <div className="search-agent-pagination">
                    <Pagination count={10} style={{ display: "flex", justifyContent: "center" }} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SearchAgent;
