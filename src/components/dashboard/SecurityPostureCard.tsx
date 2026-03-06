/**
 * SecurityPostureCard — donut chart showing overall security score (72/100).
 */
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { securityPostureData } from "@/src/data/dashboardData";

export default function SecurityPostureCard() {
  return (
    <div className="rounded-xl bg-brand-surface p-5">
      <h3 className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase mb-4">
        Security Posture
      </h3>
      <div className="flex items-center justify-center">
        <div className="relative h-44 w-44">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={securityPostureData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
              >
                {securityPostureData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-brand-white font-(family-name:--font-inter)">72</span>
            <span className="text-xs text-brand-muted">/ 100</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-emerald-400">
        ~ +4 pts this week
      </p>
    </div>
  );
}
