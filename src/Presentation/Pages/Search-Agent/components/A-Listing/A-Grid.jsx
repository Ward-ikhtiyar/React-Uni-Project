import { Grid, Box, Pagination, Typography } from '@mui/material';
import React from 'react';
import A_Card from '../A-Card/A-Card';

const A_Grid = ({ agents, isLoading, error }) => {
    const renderContent = () => {
        if (isLoading) {
            return (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <Typography variant="h6" className="loading-text">
                        Loading agents...
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
                    <Typography variant="body2" className="error-suggestion">
                        Please try again later or contact support if the problem persists.
                    </Typography>
                </div>
            );
        }

        if (!agents || agents.length === 0) {
            return (
                <div className="no-results-container">
                    <div className="no-results-icon">👥</div>
                    <Typography variant="h6" className="no-results-text">
                        No agents available
                    </Typography>
                    <Typography variant="body2" className="no-results-subtext">
                        Check back later for new agent listings.
                    </Typography>
                </div>
            );
        }

        // Render agents grid
        const agentsGrid = agents.map((agent, index) => {
            return (
                <Grid key={index} size={1} container>
                    <A_Card agent={agent} />
                </Grid>
            )
        });

        return (
            <Grid container spacing={3} columns={2} columnSpacing={3}>
                {agentsGrid}
            </Grid>
        );
    };

    return (
        <>
            <div className="grid-sectionz">
                <div className="grid-section-contentz">
                    <Box padding={'1rem'}>
                        {renderContent()}
                    </Box>
                </div>
            </div>
        </>
    );
}

export default A_Grid;
