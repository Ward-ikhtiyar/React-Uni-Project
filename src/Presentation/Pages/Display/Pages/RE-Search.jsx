import React from 'react';
import RE_Listing from '../components/RE-Listing/RE-Grid/RE-Grid-scroll'
import RE_Map from "../components/RE-Map/RE-Map.jsx";
import AppBar from '../../Home/components/appBar.jsx';

const RE_Search = () => {
    return (
        <div>
            <AppBar isHome={false}/>
            <RE_Listing/>
            <RE_Map/>
        </div>
    );
}

export default RE_Search;
