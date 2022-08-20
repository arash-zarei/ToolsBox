import React from 'react';

import styles from './ChartCoin.module.css'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const ChartCoin = ({coin, closeChart}) => {

  const labels = [coin.name];

  return (
    <div className={styles.content}>
      <span onClick={closeChart}><FontAwesomeIcon icon={faClose} /></span>
            <Bar 
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'نوسانات قیمت در 24 کذشته',
          },
        },
      }}

      data={{
        labels,
        datasets: [
          {
            label: 'کمترین قیمت',
            data: [coin.low_24h],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'بیشتربن قیمت',
            data: [coin.high_24h],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }}
    /> 
    </div>     
  );
};

export default ChartCoin;