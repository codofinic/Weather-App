import React from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as Chartjs } from 'chart.js/auto';
const Sunrise = ({UserData}) => { 
   let conValue=Number(UserData.sunrise)/(60*60*60*1000); 
  const data = {
    labels: ['5am','2pm','6pm'],
    datasets: [
      {
        label: 'Sunrise',
        data: [0,conValue,0],
        borderColor: 'rgb(254,224,96)', // Line color
        borderWidth: 5,
        fill: true, 
        backgroundColor: ' rgb(253,245,230)',
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
};

export default Sunrise;
