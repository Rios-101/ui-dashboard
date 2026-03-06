/**
 * VulnSeverityChart — vertical bar chart showing vulnerability counts by severity.
 */
"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

interface SeverityData {
  severity: string;
  count: number;
  fill: string;
}

interface VulnSeverityChartProps {
  data: SeverityData[];
}

export default function VulnSeverityChart({ data }: VulnSeverityChartProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
        Vulnerabilities by Severity
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" vertical={false} />
            <XAxis
              dataKey="severity"
              tick={{ fill: "#8888a0", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "#8888a0", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 24]}
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
              cursor={{ fill: "rgba(255,255,255,0.03)" }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]} barSize={40}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
