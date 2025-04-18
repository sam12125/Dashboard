import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function Activity() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Deposit',
        data: [200, 350, 250, 400, 350, 450, 400],
        backgroundColor: '#396AFF',
        borderRadius: 8,
        barPercentage: 0.4,
      },
      {
        label: 'Withdrawal',
        data: [150, 400, 300, 250, 450, 520, 350],
        backgroundColor: '#232323',
        borderRadius: 8,
        barPercentage: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#343C6A',
          font: { size: 12, weight: 'bold' },
        },
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
        grid: { color: '#e2e8f0' },
        ticks: { color: '#718096', font: { size: 10 } },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#718096', font: { size: 10 } },
      },
    },
  };

  return (
    <div className="w-[90%]  sm:w-[90%] lg:w-[60%] p-4 sm:p-6 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-xl font-semibold text-[#343C6A]">Weekly Activity</h1>
      </div>

      {/* Chart Container */}
      <div className="bg-white shadow-md rounded-[20px] p-4 h-[250px] sm:h-[300px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Activity;
