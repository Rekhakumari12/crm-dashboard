import React from 'react';
import OverviewBottom from './OverviewBottom';
import OverviewUpper from './OverviewUpper';

const Overview = () => {
  return (
    <div className='overview'>
      <OverviewUpper />
      <OverviewBottom />
    </div>
  );
}

export default Overview;
