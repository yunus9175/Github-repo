import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar } from '@mui/material';

function Dashboard() {
  const [data] = React.useState(JSON.parse(localStorage.getItem('data')));
  const handleLogout = () => {
    localStorage.removeItem('data');
    window.location.href = process.env.REACT_APP_REDIRECT_URL;
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Githup Repo
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          height: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card sx={{ minWidth: 345 }}>
          {/* <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          /> */}
          <Avatar
            src={data?.avatar_url}
            alt=""
            sx={{
              margin: 'auto',
              height: 200,
              width: 200,
              mt: 3,
              border: '1px solid gray',
            }}
          />
          <CardContent sx={{ pl: 10 }}>
            <Typography gutterBottom variant="h6" component="h5">
              {data?.public_repos} Repos
            </Typography>{' '}
            <Typography gutterBottom variant="h6" component="h5">
              {data?.followers} Followers
            </Typography>{' '}
            <Typography gutterBottom variant="h6" component="h5">
              {data?.following} Following
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Box>
    </>
  );
}

export default Dashboard;
