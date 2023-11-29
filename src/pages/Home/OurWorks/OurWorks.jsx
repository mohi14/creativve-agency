import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const OurWorks = () => {
    const [value, setValue] = useState()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box sx={{ mt: 5 }}>
            {/* heading section */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <SectionTitle title="Here are some of" colored="our works" sx={{
                    textAlign: "left"
                }} />
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Item 1" />
                    <Tab label="Item 2" />
                    <Tab label="Item 3" />
                </Tabs>
            </Box>



        </Box>
    );
};

export default OurWorks;