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
            {/* <div className='governetes-section'>
                <div>
                    <div className='display-section-header'> <h2>Explore Homes on Here</h2></div>
                    <div className='display-section-header-description'> <p>Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.</p></div>
                </div>
                <Box className='governetes-slides-section'>
                    <Grid container direction={'row'} columnSpacing={2} >
                        <Grid >
                            <div className='gov-sl'>
                                <div className='governetes-slide'>
                                <img className='slide-image' src={Castle} />
                            </div>
                                </div>
                        </Grid>
                    </Grid>
                </Box>
            </div> */}
            <div className="grid-section">
                <Box>
                    <Grid container spacing={2} columns={2} >
                        {proper}
                    </Grid>
                </Box>
            </div>
        </>

    );
}

export default DisplayPage;
