import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import ChangePassword from './ChangePassword';

function Dashboard() {
    const navigate = useNavigate()
    const handleLogout = () =>{
        console.log("Logout Clicked");
        navigate('/loginreg')
    }

  return (
   <>
   <CssBaseline />
   <Grid container>
       <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white'}}>
           <h1>Dashboard</h1>
           <Typography variant='h5'>Email: abc@gmail.com</Typography>
           <Typography variant='h6'>Name: abc</Typography>
           <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt:8}}>Logout</Button>
       </Grid>
       <Grid item sm={8}>
           <ChangePassword />
       </Grid>
   </Grid>
   </>
  )
}

export default Dashboard;
