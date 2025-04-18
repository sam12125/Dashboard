import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function Statistics() {
  const data = {
    labels: ['Food', 'Bills', 'Shopping', 'Others'],
    datasets: [
      {
        data: [25, 35, 20, 20],
        backgroundColor: ['#343C6A', '#FC7900', '#232323', '#396AFF'],
        borderWidth: 10,
        borderColor: '#f6f7fb',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#343C6A',
          font: {
            size: 12,
          },
        },
      },
      datalabels: {
        color: 'white',
        font: {
          weight: 'bold',
          size: 12,
        },
        formatter: (value, context) => {
          const sum = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          const percentage = (value / sum * 100).toFixed(0) + '%';
          return percentage;
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-[90%] sm:w-[40%] p-4 sm:p-6 mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-xl font-semibold text-[#343C6A]">Expense Statistics</h1>
      </div>

      {/* Pie Chart Section */}
      <div className="bg-white shadow-md rounded-[20px] p-4 flex items-center justify-center h-[250px] sm:h-[300px]">
        <div className="w-[200px] h-[200px] sm:w-[280px] sm:h-[300px]">
          <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
