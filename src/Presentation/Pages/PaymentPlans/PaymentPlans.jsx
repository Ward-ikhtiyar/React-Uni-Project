import React from 'react';
import AppBar from '../Home/components/appBar';
import { Button, Container } from '@mui/material';
import "./PaymentPlans.css"

const PaymentPlans = () => {
    return (
        <div className='paymentplans-wrapper'>
            <AppBar />
            <main id="paymentplans-page-center">
                <div className='pay-page-header'>
                    <h2>
                        List Specific Membership Packages
                    </h2>
                </div>
                <div className='pay-page-header-description'>
                    <p>
                        Users will purchase after they register in the site.
                    </p>
                </div>
                <div className='pay-plans-wrapper'>
                    <div className='pay-plan-card' >
                        <Container sx={{ display: "flex", flexDirection: "column", width: "100%" }} style={{ padding: "0 0 1.5rem", gap: "0.4rem" }}   >
                            <div className="pay-plan-card-header">
                                <h2>Regualr</h2>
                            </div>
                            <span>5$</span>
                            <p>special limited offer</p>
                            <p>6 weeks</p>
                            <p>100 listings</p>
                            <p>10 images/listing</p>
                            <p>25 featured listing</p>
                            <div>
                                <Button color='#0073e1' sx={{ border: "1px solid #0073e1" }}>hello world</Button>

                            </div>
                        </Container>
                    </div>
                    <div className='pay-plan-card' >
                        <Container sx={{ display: "flex", flexDirection: "column", width: "100%" }} style={{ padding: "0 0 1.5rem", gap: "0.4rem" }}   >
                            <div className="pay-plan-card-header">
                                <h2>Regualr</h2>
                            </div>
                            <span>5$</span>
                            <p>special limited offer</p>
                            <p>6 weeks</p>
                            <p>100 listings</p>
                            <p>10 images/listing</p>
                            <p>25 featured listing</p>
                            <div>
                                <Button color='#0073e1' sx={{ border: "1px solid #0073e1" }}>hello world</Button>

                            </div>
                        </Container>
                    </div>
                    <div className='pay-plan-card' >
                        <Container sx={{ display: "flex", flexDirection: "column", width: "100%" }} style={{ padding: "0 0 1.5rem", gap: "0.4rem" }}   >
                            <div className="pay-plan-card-header">
                                <h2>Regualr</h2>
                            </div>
                            <span>5$</span>
                            <p>special limited offer</p>
                            <p>6 weeks</p>
                            <p>100 listings</p>
                            <p>10 images/listing</p>
                            <p>25 featured listing</p>
                            <div>
                                <Button color='#0073e1' sx={{ border: "1px solid #0073e1" }}>hello world</Button>

                            </div>
                        </Container>
                    </div>
                </div>
            </main >
        </div>
    );
}

export default PaymentPlans;
