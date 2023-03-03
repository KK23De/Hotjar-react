import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ProductCard = ({
    imgSrc,
    title,
    desc,
}) => {
    return (
        <Card sx={{ maxWidth: 345, mx:2 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={imgSrc}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard