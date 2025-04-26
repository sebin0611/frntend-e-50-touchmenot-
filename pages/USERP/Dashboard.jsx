import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  const data = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Monthly Income',
        data: [9500, 11000, 12500, 13800, 12000, 12841],
        backgroundColor: '#4f46e5',
        borderRadius: 10,
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="min-h-screen bg-[#f4f6f8] p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex gap-4 items-center">
          <span className="text-gray-700">12 members</span>
          <img src="/avatar.png" alt="user avatar" className="w-10 h-10 rounded-full" />
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Visits Card */}
        <div className="bg-white rounded-2xl shadow p-6 col-span-2 flex justify-between">
          <div>
            <h2 className="text-sm text-gray-500 mb-1">Visits for Today</h2>
            <p className="text-4xl font-semibold text-gray-800">824</p>
            <div className="mt-3 text-sm text-gray-600">
              ⭐ Popularity: 93 <br />
              📈 General Rate: 4.7
            </div>
          </div>
          <div className="self-center">
            <img src="/analytics-illustration.svg" alt="Analytics Illustration" className="w-40" />
          </div>
        </div>

        {/* Popularity Card */}
        <div className="bg-orange-100 rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold text-orange-700">Popularity Rate</h2>
          <p className="text-4xl font-bold mt-2 text-orange-900">87</p>
          <p className="text-xs mt-1 text-orange-600">
            Your rate increased! <span className="font-medium">Keep moving!</span>
          </p>
        </div>

        {/* Finance Chart */}
        <div className="bg-white rounded-2xl shadow p-6 col-span-2">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Finance Performance</h2>
          <Bar data={data} options={options} />
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Top Performers</h2>
          {["Bessie Cooper", "Albert Flores", "Guy Hawkins"].map((name, index) => (
            <div key={index} className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full" />
                <div>
                  <p className="text-sm font-medium">{name}</p>
                  <p className="text-xs text-gray-500">Online</p>
                </div>
              </div>
              <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">4.{index + 3}</span>
            </div>
          ))}
        </div>

        {/* Region Targeting */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Targeting by Region</h2>
          <p className="text-sm font-medium mb-2">Poland</p>
          <p className="text-xs text-gray-500">23.03% 🔼 +4.7</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
