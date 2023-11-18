import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    return (
        <Box>
            <Container>
                <Header />
                <Outlet />
            </Container>
            <Footer />
        </Box>
    );
};

export default Layout;