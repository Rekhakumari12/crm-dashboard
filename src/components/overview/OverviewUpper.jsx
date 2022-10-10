import React from 'react';
import BasicCard from '../Card';

const OverviewUpper = () => {
  return (
    <div className='overview_upper_section'>
      <div className='leftside'></div>
      <div className='rightside'>
        <BasicCard className='w-96' />
      </div>
    </div>
  );
}

export default OverviewUpper;
