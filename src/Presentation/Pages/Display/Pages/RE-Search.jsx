// import RE_Listing from '../components/RE-Listing/RE-Grid/RE-Grid-scroll';
import AppBar from '../../Home/components/appBar.jsx';
import { PropertyProvider } from '../../../../consts/context.jsx';
import { useEffect, useState } from 'react';
import { getAcceptedProperties } from '../../../../API/requests.jsx';
import RE_Map from '../../Search-Proporties/components/RE-Map/RE-Map.jsx';
import './RE-Search.css'
import RE_Grid from '../../Search-Proporties/components/RE-Listing/RE-Grid/RE-Grid.jsx';
import FilterBar from '../../Search-Proporties/components/Filter-Bar/Filter-Bar.jsx';
const RE_Search = () => {
    const [Listings, setListings] = useState([]);
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
                <FilterBar/>
            <div className="search-page-wrapper">
                <PropertyProvider>
                    <RE_Map Listings={Listings} isAdd={false} />
                </PropertyProvider>
                <RE_Grid Listings={Listings} />
            </div>
        </div>
    );
}

export default RE_Search;
