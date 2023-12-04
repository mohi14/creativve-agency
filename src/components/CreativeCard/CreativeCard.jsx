import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, IconButton, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'

const CreativeCard = () => {

    const theme = useTheme()
    return (
        <Card sx={{ maxWidth: 345, p: 2, borderRadius: "10px", minWidth: '345px' }}>
            <CardMedia
                sx={{ height: 190, borderRadius: "10px" }}
                image="https://images.unsplash.com/photo-1682687220198-88e9bdea9931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="green iguana"

            />
            <CardContent sx={{ p: 0, pt: 4, '&:last-child': { pb: 0 }, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                    <Typography gutterBottom variant="body" component="div" color='text.secondary'>
                        Web design
                    </Typography>
                    <Typography variant="body2" color="primary.main" fontWeight={600} fontSize={20}>
                        Web design research
                    </Typography>
                </Box>
                <IconButton sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    height: '30px',
                    width: '30px',
                    '& svg': {
                        color: 'primary.main'
                    }
                }}>
                    <AddIcon />
                </IconButton>

            </CardContent>

        </Card>
    );
};

export default CreativeCard;