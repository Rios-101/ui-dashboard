/**
 * ProtocolDistributionChart — donut chart showing protocol breakdown (TCP / UDP).
 */
"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ProtocolData {
  name: string;
  value: number;
  fill: string;
}

interface ProtocolDistributionChartProps {
  data: ProtocolData[];
}

export default function ProtocolDistributionChart({ data }: ProtocolDistributionChartProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-brand-white">Protocol Distribution</h3>

      <div className="flex items-center gap-6">
        {/* Donut */}
        <div className="h-36 w-36 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={38}
                outerRadius={58}
                paddingAngle={2}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {data.map((d) => (
            <div key={d.name} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full shrink-0"
                style={{ backgroundColor: d.fill }}
              />
              <span className="text-sm text-brand-muted">{d.name}</span>
              <span className="text-sm font-semibold text-brand-white">{d.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
