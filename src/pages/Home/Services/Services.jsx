import { Box } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const serviceImages = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
];

const Services = () => {
    return (
        <Box sx={{ mt: 8 }}>
            <SectionTitle title="Provide awesome" colored="Services" sx={{ mb: 8 }} />
        </Box>
    );
};

export default Services;