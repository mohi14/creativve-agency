import { Box, Grid } from '@mui/material';
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Service from '../../../components/Service/Service';

const serviceImages = [
    'https://i.ibb.co/HNhykGp/iphone-1.png',
    'https://i.ibb.co/r0gHkvM/color-palette-1.png',
    'https://i.ibb.co/CvQwzKC/coding-1.png',
];

const Services = () => {
    return (
        <Box sx={{ mt: 8 }}>
            <SectionTitle title="Provide awesome" colored="Services" sx={{ mb: 8 }} />
            <Grid container spacing={2}>
                {

                    serviceImages?.map((image, idx) => <Grid item xs={12} sm={6} md={4} key={idx}><Service image={image} /></Grid>)
                }
            </Grid>
        </Box>
    );
};

export default Services;