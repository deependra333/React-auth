import React, { useState } from 'react'
import { Grid, Box, Typography, Card, Tab, Tabs, Button} from '@mui/material'
import Digi5 from '../images/digi5.png';
import { fontWeight } from '@mui/system';
import Login from './pages/Login';
import Registration from './pages/Registration';

const TabPanel = (props) => {
    const {  children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

function LoginReg() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
  return (
    <>
     <Grid container  sx={{height: '90vh'}}>
        <Grid item lg={7} sm={5} sx={{
         backgroundImage:`url(${Digi5})`,
         backgroundRepeat:'no-repeat',
         backgroundSize:'cover',
         backgroundPosition:'center',
         display: { xs: 'none', sm: 'block'}
      }}>
        </Grid>


    
        <Grid item lg={5} sm={7} xs={12}>
            <Card sx={{width: '90%', height: '90%', mt:5, mb:5}}>
             <Box sx={{mx:5}}>
                <Box sx={{ borderBottom:1, borderColor:'divider'}}>
                    <Tabs value={value} textColor='secondary' indicatorColor='secondary' onChange={handleChange}>
                        <Tab label='Login' sx={{textTransform:'none', fontWeight: 'bold'}}></Tab>
                        <Tab label='Register' sx={{textTransform:'none', fontWeight: 'bold'}}></Tab>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Login />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Registration />
                </TabPanel>
             </Box>
            </Card>
        </Grid>
     
     </Grid>

     </>
  )
}

export default LoginReg;
