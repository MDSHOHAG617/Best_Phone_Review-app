import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      uv: 4000,
      pv: 2400,
      name: "Page A",
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      uv: 3000,
      pv: 1398,
      name: "Page B",
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      month: "Sept",
      investment: 900000,
      sell: 740,
      revenue: 62000,
    },
  ];
  return (
    <div className="">
      <h1 className="text-3xl font-bold my-5">Welcome to Dashboard</h1>
      <div className=" flex items-center ">
        <div className="p-10">
          <LineChart width={400} height={400} data={data}>
            <Line dataKey={"sell"}></Line>
            <YAxis></YAxis>
            <XAxis dataKey={"month"}></XAxis>
            <Tooltip></Tooltip>
          </LineChart>
        </div>

        <div className=" p-16 ">
          <AreaChart
            width={700}
            height={400}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <AreaChart
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
