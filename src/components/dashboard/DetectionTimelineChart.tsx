/**
 * DetectionTimelineChart — dual line chart showing detected vs resolved shadow IT items.
 */
"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface DataPoint {
  day: string;
  detected: number;
  resolved: number;
}

interface DetectionTimelineChartProps {
  data: DataPoint[];
}

export default function DetectionTimelineChart({ data }: DetectionTimelineChartProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-brand-white">Detection vs Resolution Timeline</h3>

      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fill: "#8888a0", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#8888a0", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 8]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1e1e2a",
                border: "1px solid #3a3a50",
                borderRadius: 8,
                fontSize: 12,
                color: "#fff",
              }}
              labelStyle={{ color: "#8888a0" }}
            />
            <Legend
              verticalAlign="bottom"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 12, color: "#8888a0", paddingTop: 8 }}
            />
            <Line
              type="monotone"
              dataKey="detected"
              stroke="#f71eaf"
              strokeWidth={2}
              dot={{ r: 4, fill: "#f71eaf", stroke: "#f71eaf" }}
              activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="resolved"
              stroke="#34d399"
              strokeWidth={2}
              dot={{ r: 4, fill: "#34d399", stroke: "#34d399" }}
              activeDot={{ r: 5, stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
