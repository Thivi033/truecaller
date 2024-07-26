import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Logo from '../assets/pic.jpeg';
import './Navbar.css';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  textAlign: 'center',
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

function Navbar({ onSearchClick }) {
  return (
    <div className="navbar">
      <div className="topNav">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
        <ImageButton focusRipple>
          <ImageSrc style={{ backgroundImage: `url(${Logo})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="h5"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              Welcome to our Student Information Portal. Simply enter a phone number to quickly access detailed information about a student, including their marks, sports participation, attendance, and parent details. Our user-friendly search feature ensures you have the data you need at your fingertips.
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
            <Typography
              component="span"
              variant="h6"
              color="inherit"
              sx={{
                mt: 2,
                p: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
              onClick={onSearchClick}
            >
              Search
            </Typography>
          </Image>
        </ImageButton>
      </Box>
    </div>
  );
}

export default Navbar;
