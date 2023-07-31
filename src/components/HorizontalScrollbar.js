import React, {useContext} from 'react'
import { Box , Stack, Typography} from '@mui/material'
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
import ExerciseCard from './ExerciseCard';

function HorizontalScrollbar({data,bodyPart,setBodyPart}) {

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <AiOutlineLeft />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <AiOutlineRight />
      </Typography>
    );
  };

  return (
    <ScrollMenu RightArrow={RightArrow} LeftArrow ={LeftArrow}>
      <Stack direction='row'>
      {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
         <BodyPart item={item} setBodyPart={setBodyPart} 
        bodyPart={bodyPart} /> 
      </Box>
    ))}
    </Stack>
    </ScrollMenu>
  )
}

export default HorizontalScrollbar