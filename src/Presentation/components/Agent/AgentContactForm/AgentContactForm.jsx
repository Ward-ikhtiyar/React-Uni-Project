import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './AgentContactForm.css';

function AgentContactForm({
    onSubmition, buttonText = "Contact the team"
}) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (field) => (event) => {
        setFormData(prev => ({
            ...prev,
            [field]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <section>
            <form id='contactus-form' onSubmit={handleSubmit}>
                <TextField 
                    fullWidth 
                    size='small' 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    sx={{ backgroundColor: "#ecf7f9", fontSize: "15px" }} 
                    slotProps={{ input: { style: { fontSize: "1em", size: "48px" } } }}
                />
                <TextField 
                    fullWidth 
                    size='small' 
                    placeholder="Your Email" 
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    sx={{ backgroundColor: "#ecf7f9", fontSize: "15px" }} 
                    slotProps={{ input: { style: { fontSize: "1em", size: "48px" } } }}
                />
                <TextField 
                    fullWidth 
                    size='small' 
                    placeholder="Your Phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange('phone')}
                    sx={{ backgroundColor: "#ecf7f9", fontSize: "15px" }} 
                    slotProps={{ input: { style: { fontSize: "1em", size: "48px" } } }}
                />
                <TextField 
                    fullWidth 
                    multiline 
                    maxRows={4} 
                    size='small' 
                    placeholder="Type your message..." 
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    sx={{ backgroundColor: "#ecf7f9" }} 
                    slotProps={{ input: { style: { fontSize: "1em", height: "116px", alignItems: "start" } } }}
                />
                <Button 
                    type="submit"
                    sx={{ 
                        height: "3rem", 
                        backgroundColor: "#0073e1", 
                        color: "white", 
                        fontSize: "1rem", 
                        fontWeight: "bold", 
                        borderRadius: "4px" 
                    }}
                >
                    {buttonText}
                </Button>
            </form>
        </section>
    );
}

export default AgentContactForm;