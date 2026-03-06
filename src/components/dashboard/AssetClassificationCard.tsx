/**
 * AssetClassificationCard — donut chart showing asset breakdown by type.
 */
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { assetClassificationData } from "@/src/data/dashboardData";

export default function AssetClassificationCard() {
  return (
    <div className="rounded-xl bg-brand-surface p-5">
      <h3 className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase mb-4">
        Asset Classification
      </h3>
      <div className="flex items-center justify-center">
        <div className="h-44 w-44">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={assetClassificationData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={75}
                dataKey="value"
                stroke="none"
              >
                {assetClassificationData.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1">
        {assetClassificationData.map((item) => (
          <div key={item.name} className="flex items-center gap-1.5 text-xs text-brand-muted">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: item.fill }} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
