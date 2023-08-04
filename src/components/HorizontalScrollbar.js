import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
// import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (

  < Stack direction='row' overflow='scroll'>
    {data.map((item) => (
     
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}  />
      
      </Box>
     
    ))}
  </Stack>
 
);

export default HorizontalScrollbar;