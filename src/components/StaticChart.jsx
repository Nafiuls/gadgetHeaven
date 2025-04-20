import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StaticChart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="lg:w-[800px] w-full mx-auto h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product_id" /> {/* Use product_id for labels */}
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="price" // Price determines the height of the bar
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          {/* Remove the second Bar component using product_id */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StaticChart;
