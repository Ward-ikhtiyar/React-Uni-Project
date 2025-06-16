import { Dialog, DialogContent, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './Agent.css'
import DisplayCard from '../Search-Proporties/components/RE-Listing/RE-Card/RE-Card';
function AgentDialog({ open, onClose }) {
    const [currentindex, setCurrentIndex] = useState(0);

    const items = [
        // <DisplayCard/>,
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s"
            alt="Agent"
            className="carsouel-item"
        />,
        <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fplaceholder-person&psig=AOvVaw34hyoWIE7gnWJvrDPSSBQr&ust=1750193539420000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKjysJbp9o0DFQAAAAAdAAAAABAK"
            alt="Agent"
            className="carsouel-item"
        />,
    ];


    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const handleClose = (event, reason) => {
        console.log(`reason ${reason}`);
        if (reason && reason === 'backdropClick') {
            return; // ignore clicks inside or ESC key
        }
        onClose();
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} disableEscapeKeyDown maxWidth='sm' fullWidth>
                <DialogContent>
                    <div id="agent-dialog-body" onClick={(e) => { e.stopPropagation() }}>
                        <div id="agent-dialog-header">
                            <div id="agent-dialog-image">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEHbnGMLTCHTU3N45L2O_XBu61biBkJoRAw&s"
                                    alt="Agent"
                                    className="agent-photo"
                                />
                            </div>
                            <div id="agent-dialog-info">
                                info
                            </div>
                        </div>
                        <div className="carousel-container">
                            <IconButton
                                onClick={prevSlide}
                                className="carousel-arrow left-arrow"
                                aria-label="previous">
                                <ArrowBackIos />
                            </IconButton>

                            <div className="carousel-slide">
                                {items[currentindex]}
                            </div>

                            <IconButton
                                onClick={nextSlide}
                                className="carousel-arrow right-arrow"
                                aria-label="previous">
                                <ArrowForwardIos />
                            </IconButton>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>

    );
}

export default AgentDialog;
