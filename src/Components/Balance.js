import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Balance() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Expense',
        data: [0, 800, 600, 1200, 950, 1100, 700],
        borderColor: '#1814F3',
        borderWidth: 3,
        fill: true,
        tension: 0.5,
        backgroundColor: 'rgba(24, 20, 243, 0.1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { display: false },
        ticks: {
          color: '#A0AEC0',
          font: {
            size: 12,
          },
          callback: function (value) {
            return `$${value}`;
          },
        },
        title: {
          display: true,
          color: '#4A5568',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          color: '#A0AEC0',
          font: {
            size: 12,
          },
        },
        title: {
          display: true,
          color: '#4A5568',
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
    },
  };

  return (
    <div className="w-[90%] sm:w-[60%] h-auto rounded-lg p-4 sm:p-6 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#343C6A] pl-2">Balance History</h1>
      </div>

      {/* Chart Container */}
      <div className="bg-white shadow-md rounded-[20px] p-4  h-[300px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Balance;
