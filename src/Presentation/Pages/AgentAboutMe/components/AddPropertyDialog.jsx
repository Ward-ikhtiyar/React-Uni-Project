import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Box,
    Typography,
    InputAdornment
} from '@mui/material';

const propertyTypes = ['House', 'Apartment', 'Condo', 'Townhouse', 'Land', 'Commercial'];
const propertyStatuses = ['Active', 'Pending', 'Sold', 'Inactive'];

function AddPropertyDialog({ open, onClose, onSave, property }) {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        price: '',
        location: '',
        bedrooms: '',
        bathrooms: '',
        sqft: '',
        description: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        yearBuilt: '',
        lotSize: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (property) {
            setFormData(property);
        } else {
            setFormData({
                title: '',
                type: '',
                price: '',
                location: '',
                bedrooms: '',
                bathrooms: '',
                sqft: '',
                description: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                yearBuilt: '',
                lotSize: ''
            });
        }
        setErrors({});
    }, [property, open]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = ['title', 'type', 'price', 'location', 'bedrooms', 'bathrooms'];
        
        requiredFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            }
        });

        if (formData.price && isNaN(formData.price)) {
            newErrors.price = 'Price must be a valid number';
        }

        if (formData.bedrooms && (isNaN(formData.bedrooms) || formData.bedrooms < 0)) {
            newErrors.bedrooms = 'Bedrooms must be a valid number';
        }

        if (formData.bathrooms && (isNaN(formData.bathrooms) || formData.bathrooms < 0)) {
            newErrors.bathrooms = 'Bathrooms must be a valid number';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = () => {
        if (validateForm()) {
            onSave(formData);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                {property ? 'Edit Property' : 'Add New Property'}
            </DialogTitle>
            <DialogContent>
                <Box sx={{ pt: 2 }}>
                    <Grid container spacing={3}>
                        {/* Basic Information */}
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Basic Information
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Property Title"
                                value={formData.title}
                                onChange={(e) => handleInputChange('title', e.target.value)}
                                error={!!errors.title}
                                helperText={errors.title}
                                required
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth required error={!!errors.type}>
                                <InputLabel>Property Type</InputLabel>
                                <Select
                                    value={formData.type}
                                    onChange={(e) => handleInputChange('type', e.target.value)}
                                    label="Property Type"
                                >
                                    {propertyTypes.map(type => (
                                        <MenuItem key={type} value={type}>{type}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Price"
                                value={formData.price}
                                onChange={(e) => handleInputChange('price', e.target.value)}
                                error={!!errors.price}
                                helperText={errors.price}
                                required
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Location"
                                value={formData.location}
                                onChange={(e) => handleInputChange('location', e.target.value)}
                                error={!!errors.location}
                                helperText={errors.location}
                                required
                            />
                        </Grid>

                        {/* Property Details */}
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                Property Details
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Bedrooms"
                                value={formData.bedrooms}
                                onChange={(e) => handleInputChange('bedrooms', e.target.value)}
                                error={!!errors.bedrooms}
                                helperText={errors.bedrooms}
                                required
                                type="number"
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Bathrooms"
                                value={formData.bathrooms}
                                onChange={(e) => handleInputChange('bathrooms', e.target.value)}
                                error={!!errors.bathrooms}
                                helperText={errors.bathrooms}
                                required
                                type="number"
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Square Feet"
                                value={formData.sqft}
                                onChange={(e) => handleInputChange('sqft', e.target.value)}
                                type="number"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Description"
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                multiline
                                rows={4}
                            />
                        </Grid>

                        {/* Address Information */}
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                Address Information
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Street Address"
                                value={formData.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="City"
                                value={formData.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="State"
                                value={formData.state}
                                onChange={(e) => handleInputChange('state', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="ZIP Code"
                                value={formData.zipCode}
                                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Year Built"
                                value={formData.yearBuilt}
                                onChange={(e) => handleInputChange('yearBuilt', e.target.value)}
                                type="number"
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Lot Size (acres)"
                                value={formData.lotSize}
                                onChange={(e) => handleInputChange('lotSize', e.target.value)}
                                type="number"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave} variant="contained" color="primary">
                    {property ? 'Update Property' : 'Add Property'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddPropertyDialog;
