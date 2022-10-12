import { Grid } from '@mui/material';
import React from 'react';
import FirstCard from './overview-upper-cards/FirstCard';
import SecondCard from './overview-upper-cards/SecondCard';

const OverviewUpper = () => {
  return (
    <Grid container columnSpacing={{ md: 3 }} rowSpacing={{ sm: 2, xs: 2 }}>
      <Grid item className='leftside' md={8} sm={12} xs={12}>
        <FirstCard />
      </Grid>
      <Grid item className='rightside' md={4} sm={12} xs={12}>
        <SecondCard />
      </Grid>
    </Grid >
  );
}

export default OverviewUpper;
