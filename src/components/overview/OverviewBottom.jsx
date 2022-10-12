import { Grid } from '@mui/material';
import { useState } from 'react';
import BasicCard from '../Card';
import SmallCard from '../Card';
import Button from '../Button'
import { ClockIcon, DownArrow, PencileIcon, Trash } from '../../Icons/Icons';
import TextWithIcon from '../TextWithIcon';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, BarElement } from 'chart.js';

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler, BarElement)
const OverviewBottom = () => {
  // just for the sake of complete it fast
  const [data] = useState({
    datasets: [
      {
        type: 'bar',
        data: [40, 95, 30, 70],
        backgroundColor: '#1975F0',
        borderColor: '#1975F0',
        tension: 0.4,
        borderWidth: 1.5,
      }
    ],
    labels: ['Jan 18', 'Jan 19', 'Jan 20', 'Jan 21'],
  });
  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      xAxes: [{
        barThickness: 1
      }]
    }

  }
  return (
    <Grid container columnSpacing={{ md: 3 }} rowSpacing={{ sm: 1, xs: 1 }}>
      <Grid item md={4} sm={12} xs={12}>
        <BasicCard color='var(--gray)'>
          <div className='card_header'>
            <p className='font-bold'>Task List</p>
            <Button type='solid'>NEW TASK</Button>
          </div>
          <div className='inner_card_active mt-3'>
            <div className='flex justify-between'>
              <div className='font-medium'>Product Page Redesign</div>
              <div className='flex'>
                <PencileIcon width={12} className='mr-4' />
                <Trash width={12} />
              </div>
            </div>
            <div className='span'>Priority</div>
            <div className='flex justify-between mt-1'>
              <p>Jennie Alex</p>
              <div className='flex span items-center'>
                <ClockIcon width={12} className='mr-4' />
                <div>30 Nov</div>
              </div>
            </div>
          </div>
          <div className='inner_card'>
            <div className='flex justify-between'>
              <div className='font-medium'>Product Page Redesign</div>
              <div className='flex'>
                <PencileIcon width={12} className='mr-4' />
                <Trash width={12} />
              </div>
            </div>
            <div className='span'>Priority</div>
            <div className='flex justify-between mt-1'>
              <p>Jennie Alex</p>
              <div className='flex span items-center'>
                <ClockIcon width={12} className='mr-4' />
                <div>30 Nov</div>
              </div>
            </div>
          </div>
        </BasicCard>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <BasicCard color='var(--gray)'>
          <div className='card_header'>
            <p className='font-bold'>Followes</p>
            <div>
              <TextWithIcon text={'August 2017'} icon={<DownArrow width={12} height={12} />} />
            </div>
          </div>
          <div>
            <Bar data={data} options={options} height={219} />
          </div>
        </BasicCard>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <SmallCard />
      </Grid>
    </Grid>
  );
}

export default OverviewBottom;
