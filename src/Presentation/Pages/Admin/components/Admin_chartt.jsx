import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

function AdminStatsChart({ data, title }) {
  const defaultData = [
    {
      Month: 'Jan',
      "Active Subscriptions": 100,
      Complaints: 50,
      "Fixed Refund Complaints": 20,
    },
    {
      Month: 'Feb',
      "Active Subscriptions": 120,
      Complaints: 30,
      "Fixed Refund Complaints": 15,
    },
    {
      Month: 'Mar',
      "Active Subscriptions": 90,
      Complaints: 40,
      "Fixed Refund Complaints": 10,
    },
  ];

  const chartData =
    data?.map(item => ({
      Month: item.Month,
      "Active Subscriptions": Number(item["Active Subscriptions"]),
      Complaints: Number(item.Complaints),
      "Fixed Refund Complaints": Number(item["Fixed Refund Complaints"]),
    })) || defaultData;

  const colors = {
    "Active Subscriptions": 'orange',
    Complaints: 'brown',
    "Fixed Refund Complaints": 'pink',
  };

  return (
    <div className="admin-stats-chart-container" style={{ backgroundColor:'var(--app-background)',width: '100%', height: '400px' }}>
      <h3 style={{ color:'var(--app-font)',textAlign: 'center', marginBottom: '20px' }}>{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--app-grey)" />
          <XAxis dataKey="Month" />
          <YAxis />
          <Tooltip />
          <Legend />
          {Object.keys(colors).map(key => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              stroke={colors[key]}
              strokeWidth={2}
              dot={{ fill: colors[key], stroke: colors[key] }}
              name={key}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdminStatsChart;
