// import RE_Listing from '../components/RE-Listing/RE-Grid/RE-Grid-scroll';
import AppBar from '../../Home/components/appBar.jsx';
import { PropertyProvider } from '../../../../consts/context.jsx';
import { useEffect, useState } from 'react';
import { getAcceptedProperties, getFilteredProperties } from '../../../../API/requests.jsx';
import RE_Map from '../../Search-Proporties/components/RE-Map/RE-Map.jsx';
import './RE-Search.css'
import RE_Grid from '../../Search-Proporties/components/RE-Listing/RE-Grid/RE-Grid.jsx';
import FilterBar from '../../Search-Proporties/components/Filter-Bar/Filter-Bar.jsx';
const RE_Search = () => {
    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const [propertyType, setPropertyType] = useState('All');
    const [activeFilter, setActiveFilter] = useState(null);
    const [Listings, setListings] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleSubmit = async () => {
        // Close any open dropdowns
        setActiveFilter(null);
        
        console.log('Applying filters:', { priceRange, propertyType });
        
        // Check if any filters are actually applied
        const hasFilters = priceRange[0] > 0 || priceRange[1] < 1000000 || propertyType !== 'All';
        
        if (hasFilters) {
            setIsFiltered(true);
            await handleFilteredProperties();
        } else {
            setIsFiltered(false);
            await handleGetProperties();
        }
    };

    async function handleFilteredProperties() {
        try {
            setIsLoading(!true);
            setError(null);
            let fetchedProperties = await getFilteredProperties(priceRange[0], priceRange[1], propertyType);
            setListings(fetchedProperties);
            console.log('Filtered properties:', fetchedProperties);
        } catch (error) {
            console.error('Error fetching filtered properties:', error);
            if (error.statusCode === 404 && error.message === "No estates found") {
                // Handle 404 - no properties found with current filters
                setListings([]);
                setError("No properties found matching your criteria. Try adjusting your filters.");
            } else {
                // Other errors - fallback to all properties
                setError("Error applying filters. Showing all properties.");
                await handleGetProperties();
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function handleGetProperties() {
        let fetchedProperties = await getAcceptedProperties(false);
        setListings(fetchedProperties);
        console.log(fetchedProperties);
    }
    useEffect(() => {
        handleGetProperties();
    }, []);

    return (

        <div className='full-search-page'>
            <AppBar isHome={false} />
            <FilterBar 
                priceRange={priceRange} 
                setPriceRange={setPriceRange} 
                propertyType={propertyType} 
                setPropertyType={setPropertyType} 
                handleSubmit={handleSubmit} 
                activeFilter={activeFilter} 
                setActiveFilter={setActiveFilter} 
            />
            <div className="search-page-wrapper">
                <PropertyProvider>
                    <RE_Map Listings={Listings} isAdd={false} />
                </PropertyProvider>
                <RE_Grid 
                    Listings={Listings} 
                    isLoading={isLoading}
                    error={error}
                    isFiltered={isFiltered}
                />
            </div>
        </div>
    );
}

export default RE_Search;
