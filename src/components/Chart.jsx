import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as Chartjs } from 'chart.js/auto';
import { UserData } from './Data';
const Chart = ({toggle}) => {
  console.log(toggle);
  if(toggle){
  const data = {
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: 'Temperature',
        data: UserData.map((data) => {
          return  Math.floor(Math.random()*(40-10)+10)
        }),
        borderColor: 'rgb(0,143,251)', // Line color
        borderWidth: 5,
        fill: true, 
        backgroundColor: '  rgb(157,212,254)',
        tension: 0.4,
        pointRadius: 0
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        displays:false,
        beginAtZero: true,
        
      },
    },
    plugins: {
        legend: {
          display:false
        },
      },
     
  };  
  return (
    <div>
      <div style={{width: "376px"}}>
      <Line data={data} options={options} />
      </div>
    </div>
  );
  }
  else{
  const data = {
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: 'Temperature',
        data:[23,33,43,40,24,23,32,34,43,44,14,45,32,35],
        borderColor: 'rgb(0,143,251)', // Line color
        borderWidth: 5,
        fill: true, 
        backgroundColor: '  rgb(157,212,254)',
        tension: 0.4,
        pointRadius: 0
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        displays:false,
        beginAtZero: true,
        
      },
    },
    plugins: {
        legend: {
          display:false
        },
      },
     
  };  
  return (
    <div>
      <div style={{width: "376px"}}>
      <Line data={data} options={options} />
      </div>
    </div>
  );
  }
};

export default Chart;