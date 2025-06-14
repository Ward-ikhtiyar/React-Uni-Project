import { Button, Container, Input, TextField } from '@mui/material';
import React from 'react';
import AppBar from '../Home/components/appBar';
import './ContactUs.css'
import { Height } from '@mui/icons-material';
const ContactUs = () => {
    return (
        <>
            <AppBar />
            <Container style={{ height: "80vh", display: 'flex', alignItems: "center" }}>
                <div id='contactus-wrapper'>
                    <div id='contactus-side-section'>
                        <div className='side-otc'>
                            <h1>Contact Us</h1>
                        </div>
                        <div id='side-otc-description'>Engage with our professional real estate agents to sell, buy or rent your home.  Get emails directly to your inbox and manage the lead with theme built-in CRM. </div>
                        <div className="contacting-company-info">
                            <div>Damascus,BabToma,street 23</div>
                            <div>(963) 0900 000 000</div>
                            <div>contact@myemail.com</div>
                        </div>
                    </div >
                    <div id='contactus-form'>
                        <TextField fullWidth size='small' s alignItems="" placeholder="Your Name" sx={{ backgroundColor: "#ecf7f9", fontSize: "15px" }} slotProps={{ input: { style: { fontSize:"1em", size: "48px"} } }}>
                        </TextField>
                        <TextField fullWidth size='small' s alignItems="" placeholder="Your Email" sx={{ backgroundColor: "#ecf7f9", fontSize: "15px" }} slotProps={{ input: { style: { fontSize:"1em", size: "48px"} } }}>
                        </TextField>
                        <TextField fullWidth size='small' s alignItems="" placeholder="Your Phone" sx={{ backgroundColor: "#ecf7f9", fontSize: "15px" }} slotProps={{ input: { style: { fontSize:"1em", size: "48px"} } }}>
                        </TextField>
                        <TextField fullWidth multiline="true" maxRows={4} size='small' placeholder="Type your message..." sx={{ backgroundColor: "#ecf7f9"}} slotProps={{ input: { style: { fontSize: "1em", height: "116px", alignItems:"start" } } }}>
                        </TextField>
                        <Button sx={{height:"3rem", backgroundColor:"#0073e1"}}>hello world</Button>
                    </div>
                </div>
            </Container>
        </>

    );
}

export default ContactUs;
