/**
 * RiskCorrelationChart — scatter/bubble chart plotting Vulns vs Business Impact.
 * Bubble size = risk score. Color = pink (high risk) / green (lower risk).
 * Includes a horizontal reference line at impact=75.
 */
"use client";

import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ZAxis,
} from "recharts";

interface CorrelationPoint {
  vulns: number;
  impact: number;
  risk: number;
  label: string;
  color: string;
}

interface RiskCorrelationChartProps {
  data: CorrelationPoint[];
}

function CustomTooltip({ active, payload }: { active?: boolean; payload?: { payload: CorrelationPoint }[] }) {
  if (!active || !payload?.[0]) return null;
  const d = payload[0].payload;
  return (
    <div className="rounded-lg bg-brand-dark border border-brand-surface-light p-3 text-xs shadow-lg">
      <p className="font-semibold text-brand-white mb-1">{d.label}</p>
      <p className="text-brand-muted">Vulnerabilities: <span className="text-brand-white">{d.vulns}</span></p>
      <p className="text-brand-muted">Business Impact: <span className="text-brand-white">{d.impact}</span></p>
      <p className="text-brand-muted">Risk Score: <span className="text-brand-white">{d.risk}</span></p>
    </div>
  );
}

export default function RiskCorrelationChart({ data }: RiskCorrelationChartProps) {
  const pinkData = data.filter((d) => d.color === "#f71eaf");
  const greenData = data.filter((d) => d.color === "#34d399");
  const otherData = data.filter((d) => d.color !== "#f71eaf" && d.color !== "#34d399");

  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
        Risk Correlation — Vulns × Business Impact
      </h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
            <XAxis
              dataKey="vulns"
              type="number"
              name="Vulnerabilities"
              tick={{ fill: "#8888a0", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              label={{ value: "Vulnerabilities", position: "insideBottom", offset: -2, fill: "#8888a0", fontSize: 11 }}
            />
            <YAxis
              dataKey="impact"
              type="number"
              name="Impact"
              domain={[0, 100]}
              tick={{ fill: "#8888a0", fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              label={{ value: "Impact", angle: -90, position: "insideLeft", offset: 20, fill: "#8888a0", fontSize: 11 }}
            />
            <ZAxis dataKey="risk" range={[80, 400]} />
            <ReferenceLine y={75} stroke="#f71eaf" strokeDasharray="6 3" strokeOpacity={0.4} />
            <Tooltip content={<CustomTooltip />} />
            <Scatter data={pinkData} fill="#f71eaf" fillOpacity={0.8} />
            <Scatter data={greenData} fill="#34d399" fillOpacity={0.8} />
            {otherData.length > 0 && (
              <Scatter data={otherData} fill="#ffaa83" fillOpacity={0.8} />
            )}
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
