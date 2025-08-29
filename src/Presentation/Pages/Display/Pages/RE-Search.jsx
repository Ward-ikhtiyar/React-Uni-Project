// import RE_Listing from '../components/RE-Listing/RE-Grid/RE-Grid-scroll';
import AppBar from '../../Home/components/appBar.jsx';
import { PropertyProvider } from '../../../../consts/context.jsx';
import { useEffect, useState } from 'react';
import { getAcceptedProperties, getFilteredProperties, getPropertiesLocationLevel, getPropertiesNearMe } from '../../../../API/requests.jsx';
import RE_Map from '../../Search-Proporties/components/RE-Map/RE-Map.jsx';
import './RE-Search.css'
import RE_Grid from '../../Search-Proporties/components/RE-Listing/RE-Grid/RE-Grid.jsx';
import FilterBar from '../../Search-Proporties/components/Filter-Bar/Filter-Bar.jsx';
const RE_Search = () => {
    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const [locationSource, setLocationSource] = useState('Near Me');
    const [searchLocation, setSearchLocation] = useState({ lat: 0, lng: 0 });
    const [searchRadius, setSearchRadius] = useState(10);
    const [propertyType, setPropertyType] = useState('All');
    const [geoLevel, setGeoLevel] = useState('city');
    const [activeFilter, setActiveFilter] = useState(null);
    const [Listings, setListings] = useState([]);
    const [isFiltered, setIsFiltered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const[page,setPage]=useState(0);
    const [error, setError] = useState(null);
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


    const handleSubmit = async () => {
        // console.log("min price range: " + priceRange[0] + "max price Range: " + priceRange[1]);
        setActiveFilter(null);
        const hasFilters = priceRange[0] > 0 || priceRange[1] < 1000000 || propertyType !== 'All';
        // if (searchLocation.lat === 0 && searchLocation.lng === 0) {
        //     alert("Please allow your location or choose manually through 'On Map' in the location filter.");
        //     return; // Optionally return here to prevent further execution
        // }
        console.log('latitude:' + searchLocation.lat + 'longtitude: ' + searchLocation.lng)
        if (locationSource === 'On Map') {
            await handlePropertiesGeoLocation();
        }
        else if (locationSource === 'Near Me') {
            await handlePropertiesNearMe();
        }
        else {

            if (hasFilters) {
                setIsFiltered(true);
                await handleFilteredProperties();
            } else {
                setIsFiltered(false);
                await handleGetProperties();
            }
        }
    };


    async function handlePropertiesGeoLocation() {
        try {
            setIsLoading(true);
            setError(null);

            let fetchedProperties = await getPropertiesLocationLevel(geoLevel, searchLocation.lat, searchLocation.lng);
            setListings(fetchedProperties);
            console.log('Get Geo Level properties Request Successful:', fetchedProperties);


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
    async function handlePropertiesNearMe() {
        try {
            setIsLoading(true);
            setError(null);

            let fetchedProperties = await getPropertiesNearMe(searchRadius, searchLocation.lat, searchLocation.lng);
            setListings(fetchedProperties);
            console.log('Get Near Me properties Request Successful:', fetchedProperties);


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

    async function handleFilteredProperties() {
        try {
            setIsLoading(true);
            setError(null);

            let fetchedProperties = await getFilteredProperties(1, 0, priceRange[0], priceRange[1], propertyType === 'All' ? null : propertyType);
            setListings(fetchedProperties);
            console.log('Get Filtered properties Request Successful:', fetchedProperties);

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
        try {
            setIsLoading(true);
            setError(null);
            let fetchedProperties = await getAcceptedProperties(false);
            setListings(fetchedProperties);

            console.log('Get All properties Request Successful:', fetchedProperties);

        } catch (error) {
            console.error('Error fetching properties:', error);
            if (error.statusCode === 404 && error.message === "No estates found") {
                // Handle 404 - no properties available
                setIsLoading(false)
                setListings([]);
                setError("No properties are currently available.");
            } else {
                // Other errors
                setIsLoading(false)
                setError("Error loading properties. Please try again later.");
                setListings([property,property,property,property,property,property,property,property,property]);
            }
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        // Load all properties by default on component mount
        handleGetProperties();
    }, []);

    

    return (<div className='full-search-page'>
        <AppBar isHome={false} />
        <FilterBar
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            handleSubmit={handleSubmit}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            searchRadius={searchRadius}
            setSearchRadius={setSearchRadius}
            locationSource={locationSource}
            setLocationSource={setLocationSource}
            geoLevel={geoLevel}
            setGeoLevel={setGeoLevel}
        />
        <div className="search-page-wrapper">
            <PropertyProvider>
                <RE_Map
                    Listings={Listings} isAdd={false} locationSource={locationSource}

                    setSearchLocation={setSearchLocation}
                // searchLocation={searchLocation}
                />
            </PropertyProvider>
            <RE_Grid
                Listings={Listings}
                isLoading={isLoading}
                error={error}
                isFiltered={isFiltered}
                setSearchLocation={setSearchLocation}
            />
        </div>
    </div>
    );
}

export default RE_Search;