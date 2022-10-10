import React from 'react';
import OverviewBottom from './OverviewBottom';
import OverviewUpper from './OverviewUpper';
import { OverviewWrapper } from '../../container/App.styles';
const Overview = () => {
  return (
    <OverviewWrapper className='mt-10'>
      <OverviewUpper />
      <OverviewBottom />
    </OverviewWrapper>
  );
}

export default Overview;
