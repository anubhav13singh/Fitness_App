import React from 'react';
import { Stack, Typography } from '@mui/material';
import logo from '../assets/logo.jpg'



const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack type='button'
  alignItems='center'
  justifyContent='center'
  className='bodyPart-card' onclick
  sx={{
    borderTop: bodyPart === item ? '4px solid #ff2625': '',
    backgroundColor:'#fff',
    width:'200px',height:'150px',
    cursor:'pointer',
    gap:'4px'
  }}
  onClick={() => {
    setBodyPart(item);
    window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
  }}
  >
     <img src={logo} alt="dumbbell" style={{ width: '40px', height: '40px' }} />

    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya"
     color="#3A1212" textTransform="capitalize"> 
     {item}
     </Typography>
  </Stack>
);

export default BodyPart;