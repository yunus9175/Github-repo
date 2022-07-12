import { Typography, Box } from '@mui/material';
import React, { Suspense } from 'react';
import Route from 'routes';
import './App.css';

function App() {
  const loading = () => {
    return (
      <>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3" component="h3">
            Loading...
          </Typography>
        </Box>
      </>
    );
  };
  return (
    <>
      <Suspense fallback={loading}></Suspense>
      <Route />
    </>
  );
}

export default App;
