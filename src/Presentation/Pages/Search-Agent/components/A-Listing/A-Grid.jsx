import { Grid, Box, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import A_Card from '../A-Card/A-Card';

const A_Grid = ({ Listings }) => {
    // const agents = Listings.map((agent, index) => {
    //     return (
    //         <Grid key={index} size={1}>
    //             <A_Card agent={agent} />
    //         </Grid>
    //     )
    // }
    // )
    return (
        <>
            <div className="grid-sectionz">
                <div className="grid-section-contentz">
                    <Box padding={'1rem'}>
                        <Grid container spacing={3} columns={2} columnSpacing={3}>
                            <Grid size={1} container >
                                <A_Card />
                            </Grid>
                            <Grid size={1} container>
                                <A_Card />
                            </Grid>
                            <Grid size={1} container>
                                <A_Card />
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </>

    );
}

export default A_Grid;
