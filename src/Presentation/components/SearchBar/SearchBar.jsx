import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ placeholder }) {
    const [location, setLocation] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        // alert(`Searching for location: ${location}`);
    };

    return (
        <form onSubmit={handleSearch} className="search-wrapper">
            <div className="search-container">
                <div className="search-bar">
                    <span className="search-icon"></span>
                    <input
                        type="text"
                        placeholder={placeholder}
                        aria-controls='agent-searchbar'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="search-input"
                    />
                    {/* <label for="agent-searchbar">{placeholder}</label> */}
                </div>
            </div>
        </form>
    );
}


export default SearchBar;