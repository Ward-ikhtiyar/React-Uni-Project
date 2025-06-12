import React,{useEffect, useState} from 'react';
import { Grid, Box } from '@mui/material';
import RE_Card from '../RE-Card/RE-Card'
import './Re-Grid.css';
import { getAcceptedProperties } from '../../../../../../API/requests';

const DisplayPage = ({Listings}) => {
    if(Listings!=null){
    const proper = Listings.map((property,index) => {
        return (
            <Grid key={index} size={1}>
                <RE_Card isEditable={false} property={property} />
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

    );}
}

export default DisplayPage;
