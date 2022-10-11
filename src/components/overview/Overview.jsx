import React from 'react';
import OverviewBottom from './OverviewBottom';
import OverviewUpper from './OverviewUpper';
import { OverviewWrapper } from '../../components/overview/Overview.style';
const Overview = () => {
  return (
    <OverviewWrapper>
      <OverviewUpper />
      <OverviewBottom />
    </OverviewWrapper>
  );
}

export default Overview;
