import { TextField, Button, Box, Alert, FormControlLabel, Grid } from "@mui/material";
import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

function Forgetpassword() {


    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
    const data = new FormData(e.currentTarget);
    const actualData = {
      
        email: data.get('email'),
      
    } 
    if ( actualData.email){
        console.log(actualData);
        document.getElementById('password-reset-form-otp').reset();
        setError({ status: true, msg: "OTP has been sent to your Email. Please check your email", type: 'success'})} 
        else{
        setError({ status: true, msg: "Please provide a valid Email", type: 'error'})
    }
}


  return (
  <>
  <Grid container justifyContent='center'>
      <Grid itme sm={6} xs={12}>
          <h1>Forget password</h1>
      <Box component= 'form' noValidate sx={{mt:1}} id="password-reset-form-otp" onSubmit={handleSubmit}>
        <TextField margin="normal" required fullWidth id="email" name="email" label="Email Address" />
        <Box textAlign='center'>
            <Button type="submit" variant="contained" sx={{ mt:3, mb:2, px:5}}>Send OTP</Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
      </Grid>
  </Grid>
  </>
  )
}

export default Forgetpassword;
