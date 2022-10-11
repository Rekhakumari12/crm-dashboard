import { Grid } from '@mui/material';
import React from 'react';
import BasicCard from '../Card';

const OverviewBottom = () => {
  return (
    <Grid container columnSpacing={{ md: 3 }} rowSpacing={{ sm: 1, xs: 1 }}>
      <Grid item md={4} sm={12} xs={12}>
        <BasicCard />
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <BasicCard />
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <BasicCard />
      </Grid>
    </Grid>
  );
}

export default OverviewBottom;
