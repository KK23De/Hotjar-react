import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const HeadBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={{ display: "flex", flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
          </Link>
          <Link to="/about">
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default HeadBar