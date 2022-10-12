import React from 'react';
import TextWithIcon from '../../TextWithIcon';
import { DownArrow } from '../../../Icons/Icons';
import Button from '../../Button';
import BasicCard from '../../Card';
import TrophyImage from '../../../assets/trophy.png';
import { Box } from '@mui/system';
const FirstCard = () => {
  return (
    <>
      <TextWithIcon text={'Dashboard'} icon={<DownArrow width={15} height={15} />} className='absolute' />
      <div className='flex justify-between'>
        <h2 className='text-3xl'>Overview</h2>
        <div>
          <Button>Check Now</Button>
        </div>
      </div>
      <BasicCard bgColor='var(--blue)' color='white'>
        <div className='flex justify-between'>
          <img alt="trofy_image" src={`${TrophyImage}`} width={130} className='absolute bottom-0' />
          <div className='card_text'>
            <div className='font-medium text-3xl'>
              Congratulations Jennie,
            </div>
            <div className='opacity-60 mt-3'>
              You have completed the profile varification.
              <br />
              Its very easy to convert your points to
              <br />
              cash now
            </div>
          </div>
          <Box sx={{ width: 150, height: 150, padding: '1rem' }} className='box'>
            <div className='points'>
              <div className='text-5xl font-bold'>95</div>
              <div className='text-base '>Points</div>
            </div>
            <div className='mt-8 text-center'>E X P L O R</div>
          </Box>
        </div>
      </BasicCard>
    </>
  );
}

export default FirstCard;
