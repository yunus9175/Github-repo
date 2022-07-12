import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Rightimg from 'assets/image/airplane.png';
import axios from 'axios';
const Login = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (searchParams.get('code')) {
      axios({
        method: 'post',
        url: 'http://localhost:5000/authenticate',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
          code: searchParams?.get('code'),
          redirect_uri: 'http://localhost:3048/login',
        },
      }).then(
        (response) => {
          if (!localStorage.getItem('data')) {
            localStorage.setItem('data', JSON.stringify(response.data));
            console.log('API call');
            navigate('/dashboard');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
    // We don't have exhaustive deps here because we want to run the effect only on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    window.location.href = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}`;
  };
  return (
    <>
      <Grid container sx={{ height: '100%', width: '100%' }}>
        <Grid item sm={6} lg={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, border: '1px solid gray', borderRadius: 3, p: 3 }}
            >
              <Typography
                component="h1"
                variant="h5"
                sx={{ alignSelf: 'flex-start' }}
              >
                Login
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Button
                fullWidth
                variant="text"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClick}
              >
                Login with github
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={6} lg={6} sx={{ height: '100vh', overflow: 'hidden' }}>
          <img
            src={Rightimg}
            alt="back img"
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundSize: ['cover', 'cover'],
              backgroundPosition: 'center center',
              width: '100%',
              height: '-webkit-fill-available',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
