import { useState } from 'react';
import { 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Button, 
    TextField, 
    Box,
    Grid
} from '@mui/material';

const EditAgentInfoButton = ({ 
    linkPlaceHolder, 
    title, 
    formConfig, 
    initialValues, 
    onSave,
    // open,
    // onClose 
}) => {
    const [formData, setFormData] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [open, setOpen] = useState(false);
    const [onClose, setOnClose] = useState(false);

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

    const handleSave = () => {
        // Basic validation
        const newErrors = {};
        formConfig.forEach(field => {
            if (field.required && !formData[field.name]) {
                newErrors[field.name] = `${field.label} is required`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSave(formData);
        onClose();
    };

    const renderField = (field) => {
        const commonProps = {
            fullWidth: true,
            label: field.label,
            value: formData[field.name] || '',
            onChange: (e) => handleInputChange(field.name, e.target.value),
            error: !!errors[field.name],
            helperText: errors[field.name],
            required: field.required,
            multiline: field.type === 'textarea',
            rows: field.type === 'textarea' ? 4 : 1,
            type: field.type === 'email' ? 'email' : 'text'
        };

        return <TextField key={field.name} {...commonProps} />;
    };

    return (
        <>
            <div className="section-header">
                <h2>{title}</h2>
                <button className="edit-link" onClick={() => setOpen(true)}>
                    {linkPlaceHolder || 'Edit agent information'}
                </button>
            </div>
            
            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <Box sx={{ pt: 2 }}>
                        <Grid container spacing={3}>
                            {formConfig.map(field => (
                                <Grid item xs={field.fullWidth ? 12 : 6} key={field.name}>
                                    {renderField(field)}
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleSave} variant="contained" color="primary">
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default EditAgentInfoButton;
