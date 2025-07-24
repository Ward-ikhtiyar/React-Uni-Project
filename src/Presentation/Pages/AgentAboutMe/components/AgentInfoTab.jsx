import React from 'react';
import { TextField, FormGroup, FormControlLabel, Checkbox, Chip, Box } from '@mui/material';

function AgentInfoTab({ formData, handleInputChange, handleSpecialtyToggle, handleLanguageToggle, availableSpecialties, availableLanguages }) {
    return (
        <div className="content-section">
            <div className="section-header">
                <h2>Agent information</h2>
                <button className="edit-link">Edit agent information</button>
            </div>

            <Box className="info-grid">
                <div className="info-row">
                    <div className="info-item">
                        <label>Professional title</label>
                        <div className="info-value">
                            <span className="title-icon">👤</span>
                            <TextField
                                name="professionalTitle"
                                value={formData.professionalTitle}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                        </div>
                    </div>
                    <div className="info-item">
                        <label>In business since</label>
                        <TextField
                            name="experience"
                            type="number"
                            value={formData.experience}
                            onChange={handleInputChange}
                            placeholder="2012"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </div>
                </div>

                <div className="info-row">
                    <div className="info-item">
                        <label>Language fluency</label>
                        <div className="info-value">
                            <Box className="language-tags" sx={{ mb: 2 }}>
                                {formData.languages.length > 0 ? (
                                    formData.languages.map(lang => (
                                        <Chip 
                                            key={lang} 
                                            label={lang} 
                                            size="small" 
                                            color="primary" 
                                            variant="outlined"
                                            sx={{ mr: 1, mb: 1 }}
                                        />
                                    ))
                                ) : (
                                    <span className="placeholder-text">-</span>
                                )}
                            </Box>
                            <FormGroup className="language-checkboxes">
                                {availableLanguages.map(language => (
                                    <FormControlLabel
                                        key={language}
                                        control={
                                            <Checkbox
                                                checked={formData.languages.includes(language)}
                                                onChange={() => handleLanguageToggle(language)}
                                                size="small"
                                            />
                                        }
                                        label={language}
                                        className="checkbox-item"
                                    />
                                ))}
                            </FormGroup>
                        </div>
                    </div>
                    <div className="info-item">
                        <label>Specialties</label>
                        <div className="info-value">
                            <Box className="specialty-list" sx={{ mb: 2 }}>
                                {formData.specialties.length > 0 ? (
                                    formData.specialties.map(specialty => (
                                        <Chip 
                                            key={specialty} 
                                            label={specialty} 
                                            size="small" 
                                            color="secondary" 
                                            variant="outlined"
                                            sx={{ mr: 1, mb: 1 }}
                                        />
                                    ))
                                ) : (
                                    <span className="placeholder-text">Select specialties</span>
                                )}
                            </Box>
                            <FormGroup className="specialty-checkboxes">
                                {availableSpecialties.map(specialty => (
                                    <FormControlLabel
                                        key={specialty}
                                        control={
                                            <Checkbox
                                                checked={formData.specialties.includes(specialty)}
                                                onChange={() => handleSpecialtyToggle(specialty)}
                                                size="small"
                                            />
                                        }
                                        label={specialty}
                                        className="checkbox-item"
                                    />
                                ))}
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    );
}

export default AgentInfoTab;