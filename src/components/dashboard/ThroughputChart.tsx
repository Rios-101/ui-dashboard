/**
 * ThroughputChart — time-series area chart for network throughput (MB/s).
 */
"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface DataPoint {
  time: string;
  value: number;
}

interface ThroughputChartProps {
  data: DataPoint[];
}

export default function ThroughputChart({ data }: ThroughputChartProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-brand-white">Total Throughput</h3>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="throughputGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f71eaf" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#f71eaf" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" vertical={false} />
            <XAxis
              dataKey="time"
              tick={{ fill: "#8888a0", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#8888a0", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${v}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e2a",
                border: "1px solid #3a3a50",
                borderRadius: 8,
                fontSize: 12,
                color: "#fff",
              }}
              formatter={(value) => [`${value} MB/s`, "Throughput"]}
              labelStyle={{ color: "#8888a0" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#f71eaf"
              strokeWidth={2}
              fill="url(#throughputGrad)"
              dot={false}
              activeDot={{ r: 4, fill: "#f71eaf", stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
