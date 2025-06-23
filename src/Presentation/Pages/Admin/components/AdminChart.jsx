import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

function AdminChart({ data, title, multiLine }) {

    const defaultData = [
        { name: 'Jan', value: 400 },
        { name: 'Feb', value: 300 },
        { name: 'Mar', value: 600 },
        { name: 'Apr', value: 800 },
        { name: 'May', value: 700 },
        { name: 'Jun', value: 900 },
    ];

    const chartData = data || defaultData;

    const colors = {
        properties: 'var(--app-blue)',
        users: 'green',     
        complaints: 'var(--app-red)'    
    };

    return (
        <div className="admin-chart-container" style={{ width: '100%', height: '400px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>{title}</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={chartData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--app-grey)" />
                    <XAxis dataKey="name" />
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
                                name={key.charAt(0).toUpperCase() + key.slice(1)}
                            />
                        ))
                    ) : (
                        <Line
                            type="monotone"
                            dataKey="value"
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