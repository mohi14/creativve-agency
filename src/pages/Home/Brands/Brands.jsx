import { Box, styled } from '@mui/material';
import React from 'react';


const brands = [
    'https://i.ibb.co/27wHw8Y/image-5.png',
    'https://i.ibb.co/vVSVd76/image-6.png',
    'https://i.ibb.co/Dwj3KYc/image-7.png',
    'https://i.ibb.co/99gcp3b/image-8.png',
    'https://i.ibb.co/Rhk2VSh/image-9.png',
];

const BrandsWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > img': {
        height: '60px'
    },
    // '@media (max-width: 600px)': {},
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        '& > img': {
            marginBottom: '1rem'
        }
    }

}))

const Brands = () => {
    return (
        <BrandsWrapper>
            {
                brands?.map((brand, idx) => <img key={idx} src={brand} alt='brands' />)
            }
        </BrandsWrapper>
    );
};

export default Brands;