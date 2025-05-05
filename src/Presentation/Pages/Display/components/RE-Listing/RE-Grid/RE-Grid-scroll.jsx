import React from 'react';
import { Grid, Box } from '@mui/material';
import RE_Card from '../RE-Card/RE-Card'
import './Re-Grid.css';

const DisplayPage = () => {

    const properties = [RE_Card, RE_Card, RE_Card, RE_Card, RE_Card, RE_Card, RE_Card,]
    const proper = properties.map(() => {
        return (
            <Grid size={1}>
                <RE_Card />
            </Grid>
        )
    }
    )
    return (
        <>
            <div className="grid-section">
                <div className="grid-section-content">
                    <Box>
                        <Grid container spacing={2} columns={2} >
                            {proper}
                        </Grid>
                    </Box>
                </div>
            </div>
        </>

    );
}

export default DisplayPage;
