"use client"
import styles from "./expenseChart.module.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Monday',
  },
  {
    name: 'Tuesday',
    dinner: 500,
  },
  {
    name: 'Wednesday',
    coffee: 20,
    parking: 150,
    transportation: 300,
  },
  {
    name: 'Thursday',
    coffee: 110,
    parking: 230,
    lunch: 60,
    snacks: 52
  },
  {
    name: 'Friday',
  },
  {
    name: 'Saturday',
  },
  {
    name: 'Sunday',
  },
];

const ExpenseChart = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Weekly Expenses
            </h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="coffee" stackId="a" fill="brown" />
                <Bar dataKey="parking" stackId="a" fill="grey" />
                <Bar dataKey="lunch" stackId="a" fill="yellow" />
                <Bar dataKey="snacks" stackId="a" fill="pink" />
                <Bar dataKey="dinner" stackId="a" fill="blue" />
                </BarChart>
            </ResponsiveContainer>
        </div>
      );
}

export default ExpenseChart