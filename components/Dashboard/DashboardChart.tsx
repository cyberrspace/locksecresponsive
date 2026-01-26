"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import { BarChart3 } from "lucide-react";

const data = [
  { month: "JAN", amount: 4500 },
  { month: "FEB", amount: 4300 },
  { month: "MAR", amount: 4700 },
  { month: "APR", amount: 5200 },
  { month: "MAY", amount: 4900 },
  { month: "JUN", amount: 6000 },
  { month: "JUL", amount: 3500 },
  { month: "AUG", amount: 4000 },
  { month: "SEP", amount: 5600 },
  { month: "OCT", amount: 5400 },
  { month: "NOV", amount: 5500 },
  { month: "DEC", amount: 5700 },
];

export default function DashboardChart() {
  const [selectedMonth, setSelectedMonth] = useState<string>("JUN");

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="bg-[#F9FAFB] rounded-[12px] p-[10px]  shadow-sm px-[5px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[#1E293B] font-semibold text-[16px]">
          Dues Payment
        </h2>

        <div className="flex items-center gap-3">
          {/* Dropdown connected to state */}
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="text-gray-500 text-sm bg-transparent outline-none border border-[#E2E8F0] px-3 py-1 rounded-md cursor-pointer"
          >
            <option value="JUN">This month</option>
            <option value="MAY">Last month</option>
            <option value="MAR">Last 3 months</option>
          </select>

          <BarChart3 className="text-[#94A3B8]" size={18} />
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="transparent" />
            <XAxis
              dataKey="month"
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#94A3B8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value.toLocaleString()}`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-[#16A34A] text-white text-xs px-3 py-1 rounded-md shadow">
                      ₦{(payload[0].value * 100).toLocaleString()}
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#16A34A"
              strokeWidth={3}
              dot={(props) => {
                const { cx, cy, payload } = props;
                const isSelected = payload.month === selectedMonth;
                return (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? 5 : 4}
                    fill={isSelected ? "#16A34A" : "white"}
                    stroke="#16A34A"
                    strokeWidth={2}
                  />
                );
              }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
