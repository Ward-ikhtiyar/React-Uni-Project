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

function AdminChart({ data, title, multiLine = false }) {
  const defaultData = [
    { Month: 'Jan', Users: 400, Properties: 300, "Voting interactions": 200 },
    { Month: 'Feb', Users: 300, Properties: 500, "Voting interactions": 100 },
    { Month: 'Mar', Users: 600, Properties: 400, "Voting interactions": 300 },
  ];

  const chartData =
    data?.map(item => ({
      Month: item.Month,
      Users: Number(item.Users),
      Properties: Number(item.Properties),
      "Voting interactions": Number(item["Voting interactions"]),
    })) || defaultData;

  const colors = {
    Properties: 'var(--app-blue)',
    Users: 'green',
    "Voting interactions": 'var(--app-red)',
  };

  return (
    <div className="admin-chart-container" style={{ width: '100%', height: '400px' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '20px',color:'var(--app-font)' }}>{title}</h3>
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
          {multiLine ? (
            Object.keys(colors).map(key => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={colors[key]}
                strokeWidth={2}
                dot={{ fill: colors[key], stroke: colors[key] }}
                name={key}
              />
            ))
          ) : (
            <Line
              type="monotone"
              dataKey="Users"
              stroke="var(--app-blue)"
              strokeWidth={2}
              dot={{ fill: 'var(--app-blue)' }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AdminChart;
