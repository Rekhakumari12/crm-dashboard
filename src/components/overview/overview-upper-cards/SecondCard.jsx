
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Button from '../../Button';
import BasicCard from '../../Card';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { Dot } from '../Overview.style';

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler)

const SecondCard = () => {
  const [data] = useState({
    datasets: [
      {
        type: 'line',
        data: [0, 25, 80, 40, 20],
        backgroundColor: '#FE3678',
        borderColor: '#FE3678',
        tension: 0.4,
        borderWidth: 1.5,
        pointRadius: 2,
        pointHoverRadius: 8,
        pointBorderColor: "#FE3678",
        pointBackgroundColor: "white",
        pointStyle: 'circle',
      },
      {
        type: 'line',
        data: [10, 95, 30, 25, 40],
        backgroundColor: '#1975F0',
        borderColor: '#1975F0',
        tension: 0.4,
        borderWidth: 1.5,
        pointRadius: 2,
        pointHoverRadius: 8,
        pointBorderColor: "#1975F0",
        pointBackgroundColor: "white",
        pointStyle: 'circle',
      }
    ],
    labels: ['Jan 18', 'Jan 19', 'Jan 20', 'Jan 21'],
  });
  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  }
  return (
    <>
      <div className='flex justify-between'>
        <div className='flex justify-evenly ml-5'>
          <div className='flex items-center mr-4'><Dot type='offline' /> Offline</div>
          <div className='flex items-center'><Dot type='online' />Online</div>
        </div>
        <Button>View Details</Button>
      </div>
      <BasicCard color={'var(--gray)'}>
        <p className='font-bold'>Total Sales</p>
        <Line data={data} options={options} height={113} />
      </BasicCard>
    </>
  );
}

export default SecondCard;
