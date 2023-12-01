import { Box, IconButton, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const OurWorks = () => {
    const [value, setValue] = useState()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Box sx={{ my: 5 }}>
            {/* heading section */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <SectionTitle title="Here are some of" colored="our works" sx={{
                    textAlign: "left"
                }} />
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 2,
                }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        centered
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'none',
                            },
                            '& .Mui-selected': {
                                color: 'primary.green',
                                fontWeight: 'bold',
                            },
                            '& .MuiButtonBase-root': {
                                textTransform: 'capitalize',
                            },
                        }}
                    >
                        <Tab label='All' />
                        <Tab label='Web Design' />
                        <Tab label='Mobile App' />
                    </Tabs>
                    <Box>
                        <IconButton sx={{
                            border: `1px solid #959EAD`,
                            mr: 2,
                            color: 'primary.main'
                        }} onClick={() => setValue(value - 1)}
                            disabled={value === 0}>
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton sx={{
                            border: `1px solid #959EAD`,
                            mr: 2,
                            color: 'primary.main'
                        }} onClick={() => setValue(value + 1)}
                            disabled={value === 2}>
                            <ArrowBackIcon sx={{ transform: 'rotate(180deg)' }} />
                        </IconButton>
                    </Box>
                </Box>
            </Box>



        </Box>
    );
};

export default OurWorks;