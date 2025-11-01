// src/components/Features.jsx
import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

const features = [
  { title: 'Fast Setup', description: 'Get started quickly with Vite and React.' },
  { title: 'Responsive Design', description: 'Looks great on all devices.' },
  { title: 'Material UI', description: 'Beautiful components out of the box.' },
];

function Features() {
  return (
    <Box id="features" sx={{ py: 8, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Features
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6">{feature.title}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Features;
