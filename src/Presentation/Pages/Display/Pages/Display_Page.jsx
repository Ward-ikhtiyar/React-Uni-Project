import React from 'react';
import { Grid, Box, Container } from '@mui/material';
import Card from "../components/Display_Card"

const DisplayPage = () => {

    const properties = [Card, Card, Card, Card, Card, Card, Card, Card, Card, Card, Card, Card,]
    const proper = properties.map(() => {
        return (
            <Grid>
                <Card />
            </Grid>
        )
    }
    )
    return (
        <Box>
            <Grid container spacing={3}>
                {proper}
            </Grid>
        </Box>
    );
}

export default DisplayPage;
