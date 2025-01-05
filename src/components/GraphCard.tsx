'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PostData {
  type: string;
  likes: number;
  comments: number;
  shares: number;
}

export default function GraphCard({ postData }: { postData: PostData[] }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Post Type Performance Analysis',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    labels: postData.map(item => item.type),
    datasets: [
      {
        label: 'Likes',
        data: postData.map(item => item.likes),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Comments',
        data: postData.map(item => item.comments),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Shares',
        data: postData.map(item => item.shares),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  };

  return (
    <div className="p-6">
      <Bar options={options} data={data} />
    </div>
  );
}
