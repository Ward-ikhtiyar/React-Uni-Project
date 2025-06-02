import { Grid, Box, Pagination } from '@mui/material';
import React,{useEffect, useState} from 'react';
import RE_Card from '../RE-Card/RE-Card'
import './Re-Grid.css';
import { getAcceptedProperties } from '../../../../../../API/requests';

const DisplayPage = ({Listings}) => {
    const proper = Listings.map((property,index) => {
        return (
            <Grid key={index} size={1}>
                <RE_Card property={property} />
            </Grid>
        )
    }
    )
    return (
        <>
            <div className="grid-section">
                <div className="grid-section-content">
                    <Box padding={'1rem'}
                    >
                        <Grid container spacing={2} columns={2} >
                            {proper}
                        </Grid>
                    </Box>
                </div>
                <Pagination count={10}/>
            </div>
        </>

    );
}

export default DisplayPage;
