/**
 * WeeklyTrendChart — area/line chart showing Assets & Threats over the week.
 */
"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { weeklyTrendData } from "@/src/data/dashboardData";

export default function WeeklyTrendChart() {
  return (
    <div className="rounded-xl bg-brand-surface p-5">
      <h3 className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase mb-4">
        Weekly Trend — Assets & Threats
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={weeklyTrendData}>
            <defs>
              <linearGradient id="gradAssets" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f71eaf" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#f71eaf" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradShadow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffaa83" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#ffaa83" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#32324a" />
            <XAxis
              dataKey="day"
              tick={{ fill: "#8888a0", fontSize: 12 }}
              axisLine={{ stroke: "#32324a" }}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              tick={{ fill: "#8888a0", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 1400]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fill: "#8888a0", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              domain={[0, 36]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#282836",
                border: "1px solid #32324a",
                borderRadius: "8px",
                color: "#f0f0f0",
                fontSize: "12px",
              }}
            />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="totalAssets"
              stroke="#f71eaf"
              fill="url(#gradAssets)"
              strokeWidth={2}
              name="Total Assets"
            />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="shadowIT"
              stroke="#ffaa83"
              fill="url(#gradShadow)"
              strokeWidth={2}
              name="Shadow IT"
            />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="openVulns"
              stroke="#ef4444"
              fill="none"
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Open Vulns"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex justify-center gap-5">
        {[
          { color: "#f71eaf", label: "Total Assets" },
          { color: "#ffaa83", label: "Shadow IT" },
          { color: "#ef4444", label: "Open Vulns" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-1.5 text-xs text-brand-muted">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.color }} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
