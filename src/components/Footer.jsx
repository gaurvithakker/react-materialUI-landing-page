// src/components/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        textAlign: 'center',
        backgroundColor: '#1976d2',
        color: '#fff',
        mt: 4,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
