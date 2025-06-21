import React, { useState } from 'react';
import FilterButton from './components/Filter-Buttons/Filter-Button';
import './Filter-Bar.css'
import SearchBar from '../../../../components/SearchBar/SearchBar';

const FilterBar = ({priceRange, setPriceRange, propertyType, setPropertyType, handleSubmit, activeFilter, setActiveFilter}) => {
    // const [activeFilter, setActiveFilter] = useState(null);
    // const [priceRange, setPriceRange] = useState([0, 1000000]);
    // const [propertyType, setPropertyType] = useState('All');

    const handleFilterClick = (filterName) => {
        setActiveFilter(activeFilter === filterName ? null : filterName);
    };

    
    const propertyTypes = ['All', 'House', 'Apartment', 'Villa'];

    const handleMinPriceChange = (value) => {
        const newMin = Math.min(parseInt(value) || 0, priceRange[1]);
        setPriceRange([newMin, priceRange[1]]);
    };

    const handleMaxPriceChange = (value) => {
        const newMax = Math.max(parseInt(value) || 0, priceRange[0]);
        setPriceRange([priceRange[0], newMax]);
    };

    return (
        <div className='filterbar'>
            <div className="filter-container">
                <div className="search-bar-item">
                    <SearchBar />
                </div>

                <div className="filter-item">
                    <button 
                        className={`filter-button ${activeFilter === 'price' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('price')}
                    >
                        <span className="filter-label">Price Range</span>
                        <span className="filter-icon">▼</span>
                    </button>
                    {activeFilter === 'price' && (
                        <div className="filter-dropdown">
                            <div className="price-filter">
                                <div className="price-inputs">
                                    <div className="price-input-group">
                                        <label>Min Price</label>
                                        <input 
                                            type="number" 
                                            value={priceRange[0]} 
                                            onChange={(e) => handleMinPriceChange(e.target.value)}
                                            placeholder="0"
                                        />
                                    </div>
                                    <div className="price-input-group">
                                        <label>Max Price</label>
                                        <input 
                                            type="number" 
                                            value={priceRange[1]} 
                                            onChange={(e) => handleMaxPriceChange(e.target.value)}
                                            placeholder="1,000,000"
                                        />
                                    </div>
                                </div>
                                <div className="price-slider-container">
                                    <div className="price-slider">
                                        <div className="slider-track">
                                            <div 
                                                className="slider-range" 
                                                style={{
                                                    left: `${(priceRange[0] / 1000000) * 100}%`,
                                                    right: `${100 - (priceRange[1] / 1000000) * 100}%`
                                                }}
                                            ></div>
                                            <input 
                                                type="range" 
                                                min="0" 
                                                max="1000000" 
                                                step="10000"
                                                value={priceRange[0]} 
                                                onChange={(e) => handleMinPriceChange(e.target.value)}
                                                className="range-slider min-slider"
                                            />
                                            <input 
                                                type="range" 
                                                min="0" 
                                                max="1000000" 
                                                step="10000"
                                                value={priceRange[1]} 
                                                onChange={(e) => handleMaxPriceChange(e.target.value)}
                                                className="range-slider max-slider"
                                            />
                                        </div>
                                        <div className="price-labels">
                                            <span>$0</span>
                                            <span>$1M</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="filter-item">
                    <button 
                        className={`filter-button ${activeFilter === 'type' ? 'active' : ''}`}
                        onClick={() => handleFilterClick('type')}
                    >
                        <span className="filter-label">Property Type</span>
                        <span className="filter-icon">▼</span>
                    </button>
                    {activeFilter === 'type' && (
                        <div className="filter-dropdown">
                            <div className="property-type-filter">
                                {propertyTypes.map((type) => (
                                    <button 
                                        key={type}
                                        className={`type-option ${propertyType === type ? 'selected' : ''}`}
                                        onClick={() => setPropertyType(type)}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="submit-button-item">
                    <button className="submit-button" onClick={handleSubmit}>
                        <span className="submit-icon">🔍</span>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;
