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

                const property = {
  title: "بيت الأحلام",
  description: "منزل جميل مع كل وسائل الراحة الحديثة، قريب من كل الخدمات.",
  isForRent: true,
  price: 1500,
  pointsDto: {
    lat: 30.0444,
    lon: 31.2357,
  },
  rooms: 3,
  bathrooms: 2,
  area: 120,
  floorNumber: 1,
  hasGarage: true,
  hasGarden: true,
  heatingType: "Gas",
  flooringType: "Wood",
  propertyType: "House",
  isFloor: false,
  agencyId: 2,
  propertyImages: [
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
  ],
  location: {
    country: "Egypt",
    governorate: "Cairo",
    city: "Cairo",
    quarter: "Zamalek",
    street: "El-Gezira St.",
    lat: 30.0444,
    lon: 31.2357,
  },
  voteScore: 4.5,
  viewCount: 123,
  user: {
    id: 1,
    username: "AhmedAli",
    profileImage: "https://picsum.photos/50/50?random=1",
  },
};
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isFiltered, setIsFiltered] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const [propertyType, setPropertyType] = useState('All');
    const [activeFilter, setActiveFilter] = useState(null);
    const[page,setPage]=useState(0);


console.log("im in the fuckling seacth [page");

    const fetchProperties = async () => {
        console.log("im fethcing properties");
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
            setProperties([property,property,property,property,property,property,property,property,property]);

        }
    };
    useEffect(() => {
        fetchProperties();
    }, [properties]);



    const handleFilterSubmit = async () => {
        console.log("im fetching filtered properties");
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
            {/* <AppBar /> */}
            {/* <FilterBar 
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                propertyType={propertyType}
                setPropertyType={setPropertyType}
                handleSubmit={handleFilterSubmit}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
            /> */}
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

export default RE_Search;
