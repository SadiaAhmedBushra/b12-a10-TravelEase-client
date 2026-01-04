import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardHome = () => {
  const [stats, setStats] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://travelease-server-alpha.vercel.app/dashboard-stats")
      .then((res) => res.json())
      .then((data) => setStats(data));

    fetch("https://travelease-server-alpha.vercel.app/dashboard-bookings-chart")
      .then((res) => res.json())
      .then((data) => setChartData(data));

    fetch("https://travelease-server-alpha.vercel.app/dashboard-recent-bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow p-6">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-3xl font-bold">{item.count}</p>
          </div>
        ))}
      </div>

      <div className="card bg-base-100 shadow p-6">
        <h2 className="font-semibold mb-4">TravelEase Monthly Bookings</h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
           <Bar dataKey="bookings" fill="#6a1bce" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Data Table */}
      <div className="card bg-base-100 shadow p-6">
        <h2 className="font-semibold mb-4">TravelEase Recent Bookings</h2>

        <table className="table">
          <thead>
            <tr>
              <th>User</th>
              <th>Vehicle</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.userEmail}</td>
                <td>{b.vehicleName}</td>
                <td>
                  {new Date(b.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardHome;
