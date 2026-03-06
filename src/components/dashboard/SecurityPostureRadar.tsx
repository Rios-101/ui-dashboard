/**
 * SecurityPostureRadar — radar/spider chart showing security posture
 * across 6 dimensions using recharts RadarChart.
 */
"use client";

import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

interface RadarDataPoint {
  axis: string;
  value: number;
}

interface SecurityPostureRadarProps {
  data: RadarDataPoint[];
}

export default function SecurityPostureRadar({ data }: SecurityPostureRadarProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-2 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
        Security Posture Radar
      </h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="#3a3a50" />
            <PolarAngleAxis
              dataKey="axis"
              tick={{ fill: "#8888a0", fontSize: 10 }}
              tickLine={false}
            />
            <PolarRadiusAxis
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              dataKey="value"
              stroke="#f71eaf"
              strokeWidth={2}
              fill="#f71eaf"
              fillOpacity={0.15}
              dot={{ r: 3, fill: "#f71eaf", stroke: "#f71eaf" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
