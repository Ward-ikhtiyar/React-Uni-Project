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

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (onSubmit) {
    //         onSubmit(formData);
    //     }
    // };

    return (
        <section>
            <form id='contactus-form' >
                <div style={{color:'var(--app-blue)',fontFamily:'Tajawal',fontSize:'30px',fontWeight:'600'}}>Submit Your Property </div>
                <div style={{color:'var(--app-font)',fontFamily:'Tajawal',fontSize:'15px',fontWeight:'600'}}>Send your property details for direct listing on their profile</div>

                <Button  
                onClick={()=>onSubmition()}
                    
                    style={{ 
                        height: "3rem", 
                        backgroundColor: "var(--app-blue)", 
                        fontFamily:'Tajawal',
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