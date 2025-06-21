import { Grid, Typography } from '@mui/material';
import React from 'react';
import RE_Card from '../RE-Card/RE-Card'
import './Re-Grid.css';
import Footer from '../../../../Home/components/footer';

const RE_Grid = ({ Listings, isLoading, error, isFiltered }) => {
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <Typography variant="h6" className="loading-text">
                        Loading properties...
                    </Typography>
                </div>
            );
        }

        if (error) {
            return (
                <div className="error-container">
                    <div className="error-icon">⚠️</div>
                    <Typography variant="h6" className="error-text">
                        {error}
                    </Typography>
                    {isFiltered && (
                        <Typography variant="body2" className="error-suggestion">
                            Try adjusting your search criteria or browse all available properties.
                        </Typography>
                    )}
                </div>
            );
        }

        if (!Listings || Listings.length === 0) {
            return (
                <div className="no-results-container">
                    <div className="no-results-icon">🏠</div>
                    <Typography variant="h6" className="no-results-text">
                        {isFiltered ? "No properties match your criteria" : "No properties available"}
                    </Typography>
                    <Typography variant="body2" className="no-results-subtext">
                        {isFiltered 
                            ? "Try adjusting your filters or search criteria." 
                            : "Check back later for new listings."
                        }
                    </Typography>
                </div>
            );
        }

        // Render properties grid
        const proper = Listings.map((property, index) => {
            return (
                <Grid key={index} size={1}>
                    <RE_Card isEditable={false} property={property} />
                </Grid>
            )
        });

        return (
            <Grid container spacing={2} columns={2}>
                {proper}
            </Grid>
        );
    };

    return (
        <div className="grid-section">
            <div className="grid-header">
                <div className="header-content">
                    <div className="header-main">
                        <div className="results-info">
                            <Typography variant="h5" className="results-count">
                                {isLoading ? "Loading..." : 
                                 error ? "Error" :
                                 Listings ? `${Listings.length} Properties Found` : "0 Properties Found"}
                            </Typography>
                            <Typography variant="body1" className="results-subtext">
                                {isLoading ? "Please wait while we fetch properties..." :
                                 error ? "There was an issue loading properties" :
                                 isFiltered ? "Filtered results from your search" :
                                 "Discover your perfect home from our curated collection"}
                            </Typography>
                        </div>
                        <div className="header-actions">
                            <div className="view-toggle">
                                <button className="view-btn active">
                                    <span className="view-icon">⊞</span>
                                    Grid
                                </button>
                                <button className="view-btn">
                                    <span className="view-icon">☰</span>
                                    List
                                </button>
                            </div>
                            <div className="sort-dropdown">
                                <select className="sort-select">
                                    <option>Sort by: Newest</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Bedrooms</option>
                                    <option>Bathrooms</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {!isLoading && !error && Listings && (
                        <div className="header-stats">
                            <div className="stat-item">
                                <span className="stat-number">{Listings.length}</span>
                                <span className="stat-label">Available</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">24</span>
                                <span className="stat-label">New Today</span>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <span className="stat-number">156</span>
                                <span className="stat-label">This Week</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="grid-section-content">
                {renderContent()}
            </div>
            <Footer/>
        </div>
    );
}

export default RE_Grid;
