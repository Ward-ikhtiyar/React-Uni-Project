// import React from 'react';
// import RE_Listing from '../components/RE-Listing/RE-Grid/RE-Grid.jsx'
// import RE_Map from "../components/RE-Map/RE-Map.jsx";
// import AppBar from '../../Home/components/appBar.jsx';
// import FilterBar from '../components/Filter-Bar/Filter-Bar.jsx';

// import './RE-Search.css';
// const RE_Search = () => {
//     return (
//         <div id='full-search-page'>
//             <AppBar />
//             {/* <div id="search-page-content"> */}
//                 {/* <FilterBar /> */}
//                 <div id="search-page-wrapper">
//                     <RE_Map />
//                     <RE_Listing />
//                 </div>
//             {/* </div> */}
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import RE_Listing from '../components/RE-Listing/RE-Grid/RE-Grid.jsx'
import RE_Map from "../components/RE-Map/RE-Map.jsx";
import AppBar from '../../Home/components/appBar.jsx';
import FilterBar from '../components/Filter-Bar/Filter-Bar.jsx';
import { getAcceptedProperties, getFilteredProperties } from '../../../../API/requests.jsx';

import './RE-Search.css';

const RE_Search = () => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isFiltered, setIsFiltered] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const [propertyType, setPropertyType] = useState('All');
    const [activeFilter, setActiveFilter] = useState(null);

    useEffect(() => {
        fetchProperties();
    }, []);

    const fetchProperties = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await getAcceptedProperties(false);
            if (data) {
                setProperties(data);
                setIsLoading(false);
            } else {
                setError("Failed to fetch properties");
            }
        } catch (err) {
            setError("An error occurred while fetching properties");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFilterSubmit = async () => {
        try {
            setIsLoading(true);
            setError(null);
            setIsFiltered(true);
            
            const data = await getFilteredProperties(
                priceRange[0],
                priceRange[1],
                propertyType === 'All' ? '' : propertyType
            );
            
            if (data) {
                setProperties(data);
            } else {
                setError("No properties found matching your criteria");
            }
        } catch (err) {
            setError("An error occurred while filtering properties");
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div id='full-search-page'>
            <AppBar />
            <FilterBar 
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                propertyType={propertyType}
                setPropertyType={setPropertyType}
                handleSubmit={handleFilterSubmit}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            />
            <div id="search-page-wrapper">
                <RE_Map Listings={properties} />
                <RE_Listing 
                    Listings={properties}
                    isLoading={isLoading}
                    error={error}
                    isFiltered={isFiltered}
                />
            </div>
        </div>
    );
}

// export default RE_Search;
