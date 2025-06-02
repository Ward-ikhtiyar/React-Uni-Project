import RE_Listing from '../components/RE-Listing/RE-Grid/RE-Grid-scroll'
import RE_Map from "../components/RE-Map/RE-Map.jsx";
import AppBar from '../../Home/components/appBar.jsx';
import { PropertyProvider } from '../../../../consts/context.jsx';
import { useEffect, useState } from 'react';
import { getAcceptedProperties } from '../../../../API/requests.jsx';
const RE_Search = () => {
    const[Listings,setListings]=useState([]);
    async function handleGetProperties(){
        let fetchedProperties=await getAcceptedProperties(false);
        setListings(fetchedProperties);
    }
    useEffect(()=>{
        handleGetProperties();
    },[]);
    return (
        
        <div style={{height:'100vh'}}>
            <AppBar isHome={false}/>
            <RE_Listing Listings={Listings}/>
            <PropertyProvider>
            <RE_Map Listings={Listings} isAdd={false}/>
            </PropertyProvider>
        </div>
    );
}

export default RE_Search;
