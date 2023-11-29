import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Service = ({ image }) => {
    return (
        <Card sx={{ maxWidth: 345, boxShadow: "none", pt: 2, mx: "auto", "&:hover": { boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)" } }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
                sx={{
                    width: "auto",
                    mx: "auto"
                }}
            />
            <CardContent sx={{
                textAlign: "center"
            }}>
                <Typography gutterBottom variant="h5" component="div" sx={{
                    fontWeight: "bold"
                }}>
                    Web & Mobile design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    We craft stunning and amazing web UI, using a drrafted UX to fit your product.
                </Typography>
            </CardContent>

        </Card>
    );
};

export default Service;