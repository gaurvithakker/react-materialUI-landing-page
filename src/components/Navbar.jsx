// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6">MyBrand</Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
<Typography variant="h6" sx={{ flexGrow: 1 }}>
  MyBrand
</Typography>
<Button color="inherit" href="#features">Features</Button>
<Button color="inherit" href="#contact">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
