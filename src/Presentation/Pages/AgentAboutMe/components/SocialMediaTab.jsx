import React from 'react';
import { TextField, Box, InputAdornment } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Language } from '@mui/icons-material';

function SocialMediaTab({ formData, handleInputChange }) {
    return (
        <div className="content-section">
            <div className="section-header">
                <h2>Social media & links</h2>
                <button className="edit-link">Edit social media & links</button>
            </div>

            <Box className="info-grid">
                <div className="info-row">
                    <div className="info-item">
                        <label>Website</label>
                        <TextField
                            name="website"
                            value={formData.website || ''}
                            onChange={handleInputChange}
                            placeholder="https://yourwebsite.com"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Language />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="info-item">
                        <label>LinkedIn</label>
                        <TextField
                            name="linkedin"
                            value={formData.linkedin || ''}
                            onChange={handleInputChange}
                            placeholder="https://linkedin.com/in/yourprofile"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LinkedIn />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                </div>

                <div className="info-row">
                    <div className="info-item">
                        <label>Facebook</label>
                        <TextField
                            name="facebook"
                            value={formData.facebook || ''}
                            onChange={handleInputChange}
                            placeholder="https://facebook.com/yourprofile"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Facebook />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="info-item">
                        <label>Twitter</label>
                        <TextField
                            name="twitter"
                            value={formData.twitter || ''}
                            onChange={handleInputChange}
                            placeholder="https://twitter.com/yourhandle"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Twitter />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                </div>

                <div className="info-row">
                    <div className="info-item">
                        <label>Instagram</label>
                        <TextField
                            name="instagram"
                            value={formData.instagram || ''}
                            onChange={handleInputChange}
                            placeholder="https://instagram.com/yourhandle"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Instagram />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="info-item">
                        <label>Other Link</label>
                        <TextField
                            name="otherLink"
                            value={formData.otherLink || ''}
                            onChange={handleInputChange}
                            placeholder="https://yourother.link"
                            variant="outlined"
                            size="small"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Language />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default SocialMediaTab;