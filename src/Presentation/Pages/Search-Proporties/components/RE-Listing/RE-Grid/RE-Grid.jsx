import { Grid, Typography } from '@mui/material';
import React from 'react';
import RE_Card from '../RE-Card/RE-Card'
import './Re-Grid.css';
import Footer from '../../../../Home/components/footer';

const RE_Grid = ({ Listings }) => {
    if (Listings != null) {
        const proper = Listings.map((property, index) => {
            return (
                <Grid key={index} size={1}>
                    <RE_Card isEditable={false} property={property} />
                </Grid>
            )
        });

        return (
            <div className="grid-section">
                <div className="grid-header">
                    <div className="header-content">
                        <div className="header-main">
                            <div className="results-info">
                                <Typography variant="h5" className="results-count">
                                    {Listings.length} Properties Found
                                </Typography>
                                <Typography variant="body1" className="results-subtext">
                                    Discover your perfect home from our curated collection
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
                    </div>
                </div>
                <div className="grid-section-content">
                    <Grid container spacing={2} columns={2}>
                        {proper}
                    </Grid>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default RE_Grid;
