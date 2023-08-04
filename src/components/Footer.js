import React from 'react'
import logo from '../assets/Fitness-Logo-Triceps-Transparent-PNG.png'
import { Box, Typography, Stack } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={logo} alt="logo" style={{ width: '100px', height: '60px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by Anubhav</Typography>
  </Box>
);

export default Footer;