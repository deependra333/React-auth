import React from "react";
import { AppBar, Box,Typography, Toolbar, Button} from '@mui/material'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
  <>
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{bgcolor: '#0A2647'}}>
        <Toolbar>
            <Typography variant='h5' component="div" sx={{ flexGrow: 1}}>
                DigiBrain
            </Typography>
            <Button component={NavLink} to='/' style={({isActive}) =>{return { backgroundColor: isActive ? '#2C74B3' : ''}}}  sx={{ color:'white'}}>Home</Button>
            <Button component={NavLink} to='/contact'  style={({isActive}) =>{return { backgroundColor: isActive ? '#2C74B3' : ''}}}   sx={{ color:'white'}}>Contact</Button>
            <Button component={NavLink} to='/loginreg'  style={({isActive}) =>{return { backgroundColor: isActive ? '#2C74B3' : ''}}}   sx={{ color:'white'}}>Login / Register</Button>
        </Toolbar>
    </AppBar>
  </Box>
  </>
  );
}

export default Navbar;
