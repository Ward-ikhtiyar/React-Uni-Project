export const generalInfoFormConfig = [
    { name: 'firstName', label: 'First Name', required: true, fullWidth: false },
    { name: 'lastName', label: 'Last Name', required: true, fullWidth: false },
    { name: 'email', label: 'Email', type: 'email', required: true, fullWidth: false },
    { name: 'phone', label: 'Phone Number', required: true, fullWidth: false },
    { name: 'aboutMe', label: 'About Me', type: 'textarea', required: false, fullWidth: true }
];

export const brokerageInfoFormConfig = [
    { name: 'companyName', label: 'Company Name', required: true, fullWidth: false },
    { name: 'officePhone', label: 'Office Phone', required: true, fullWidth: false },
    { name: 'officeAddress', label: 'Office Address', required: true, fullWidth: true },
    { name: 'city', label: 'City', required: true, fullWidth: false },
    { name: 'state', label: 'State', required: true, fullWidth: false }
];

export const agentInfoFormConfig = [
    { name: 'licenseNumber', label: 'License Number', required: true, fullWidth: false },
    { name: 'experience', label: 'Years of Experience', required: true, fullWidth: false },
    { name: 'specializations', label: 'Specializations', type: 'textarea', required: false, fullWidth: true },
    { name: 'certifications', label: 'Certifications', type: 'textarea', required: false, fullWidth: true }
];

export const socialMediaFormConfig = [
    { name: 'linkedin', label: 'LinkedIn Profile', required: false, fullWidth: true },
    { name: 'facebook', label: 'Facebook Profile', required: false, fullWidth: true },
    { name: 'instagram', label: 'Instagram Profile', required: false, fullWidth: true },
    { name: 'twitter', label: 'Twitter Profile', required: false, fullWidth: true },
    { name: 'website', label: 'Personal Website', required: false, fullWidth: true }
]; 