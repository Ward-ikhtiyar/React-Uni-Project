import React from 'react';
import FilterButton from './components/Filter-Buttons/Filter-Button';
import './Filter-Bar.css'
import SearchBar from '../../../../components/SearchBar/SearchBar';
const FilterBar = () => {
    return (
        <div className='filterbar'>
            <SearchBar/>
            <FilterButton/>
        </div>
    );
}

export default FilterBar;
