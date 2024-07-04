import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar style={{backgroundColor:'blue'}} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          movieApp
        </Typography>
       <Link style={{color:'white'}}  to='/'> <Button color="inherit">ViewMovie</Button></Link>
       <Link style={{color:'white'}}  to='/Add'> <Button color="inherit">AddMovie</Button></Link>
      {/* <Link style={{color:'white'}}  to='/Mcard'> <Button color="inherit">Card</Button></Link>*/}
      </Toolbar>
    </AppBar>
  </Box>

    </div>
  )
}

export default Navbar