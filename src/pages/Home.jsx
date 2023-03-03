import React from 'react'
import { Grid, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard'

const Home = () => {
    const data = [{
        id: 1,
        imgSrc: "https://qph.cf2.quoracdn.net/main-qimg-1c662238181c7af5474c9b3158bf1b97-lq",
        title: "Karasuno",
        desc: "Karasuno is best team",
      }, {
        id: 2,
        imgSrc: "https://images2.alphacoders.com/699/thumb-1920-699054.png",
        title: "Haikyuu",
        desc: "Haikyuu is anime",
      }, {
        id: 3,
        imgSrc: "https://animecorner.me/wp-content/uploads/2022/08/haikyuu.jpg",
        title: "Kageyama",
        desc: "Kageyama is friend of Hinata",
      }]
    
      const sports = [{
        id: 1,
        imgSrc: "https://i.pinimg.com/originals/ba/b9/3b/bab93b67258c353a7310f589ac88ab30.jpg",
        title: "Diamond no ace",
        desc: "Diamond no ace is anime",
      },{
        id: 2,
        imgSrc: "https://images2.alphacoders.com/699/thumb-1920-699054.png",
        title: "Haikyuu",
        desc: "Haikyuu is anime",
      }]
  return (
    <>
    <Grid container my={2} mx={2} spacing={2}>
        <Typography mx={2} variant='h4'>Haikyuu Anime: </Typography>
        <Grid my={2} item xs={6} md={12} sx={{ display: "flex" }} >
          {
            data.map(card => {
              return <ProductCard key={`index-${card.id}`} {...card} />
            })
          }
        </Grid>
        <Typography mx={2} variant='h4'>Sports Anime: </Typography>
        <Grid my={2} item xs={6} md={12} sx={{ display: "flex" }} >
          {
            sports.map(card => {
              return <ProductCard key={`index-${card.id}`} {...card} />
            })
          }
        </Grid>
      </Grid>
    </>
  )
}

export default Home