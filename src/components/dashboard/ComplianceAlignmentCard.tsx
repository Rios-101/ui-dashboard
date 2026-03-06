/**
 * ComplianceAlignmentCard — horizontal progress bars for each compliance framework.
 */
"use client";

import { complianceData } from "@/src/data/dashboardData";

const statusColors: Record<string, string> = {
  "On Track": "bg-emerald-500 text-emerald-100",
  "At Risk": "bg-yellow-500 text-yellow-100",
  Compliant: "bg-emerald-500 text-emerald-100",
};

const barColors: Record<string, string> = {
  "On Track": "bg-emerald-500",
  "At Risk": "bg-yellow-500",
  Compliant: "bg-emerald-500",
};

export default function ComplianceAlignmentCard() {
  return (
    <div className="rounded-xl bg-brand-surface p-5">
      <h3 className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase mb-5">
        Compliance Alignment
      </h3>
      <div className="space-y-4">
        {complianceData.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-brand-white">{item.name}</span>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusColors[item.status]}`}
                >
                  {item.status}
                </span>
                <span className="text-xs font-semibold text-brand-white">{item.value}%</span>
              </div>
            </div>
            <div className="h-2 w-full rounded-full bg-brand-tertiary">
              <div
                className={`h-full rounded-full ${barColors[item.status]}`}
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
