// src/components/Hero.jsx
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        height: '80vh',
        backgroundImage: 'url(https://source.unsplash.com/random/1600x900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ color: '#FFEB3B' }}>
        Welcome to My Landing Page
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: '#81D4FA' }}>
        Fast, responsive, and built with React + Vite + Material UI
      </Typography>
      <Button variant="contained" color="secondary" sx={{ color: '#000' }}>
        Get Started
      </Button>
    </Box>
  );
}

export default Hero;

