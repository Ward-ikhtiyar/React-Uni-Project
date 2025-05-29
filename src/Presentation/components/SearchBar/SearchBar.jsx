import React, { useState } from 'react';
import './SearchBar.css';
import { Autocomplete, TextField } from '@mui/material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState();
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
        console.log(searchTerm);
    };
    return (
        <div className="agent-search-section">
            <div className="searchBar">
                <TextField
                    aria-label='Search'
                    variant='outlined'
                    fullWidth
                    sx={{ height: "38px" }}
                    slotProps={{
                        input: {
                            inputProps: {
                                // size: "small",
                                style:{padding: "6px 8px"}
                            }
                        }
                    }}
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder='City, neighborhood or code' >
                </TextField>
            </div>
        </div>
    );
}

export default SearchBar;
