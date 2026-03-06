/**
 * PocDeliverablesStatus — grid of 8 POC deliverable cards with progress bars.
 */
"use client";

import { pocDeliverablesData } from "@/src/data/dashboardData";

const statusStyles = {
  Complete: "bg-emerald-500/20 text-emerald-400",
  "In Progress": "bg-yellow-500/20 text-yellow-400",
  Planned: "bg-brand-muted/20 text-brand-muted",
};

const barColors = {
  Complete: "bg-emerald-500",
  "In Progress": "bg-yellow-500",
  Planned: "bg-brand-muted",
};

export default function PocDeliverablesStatus() {
  return (
    <div className="rounded-xl bg-brand-surface p-5">
      <h3 className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase mb-4">
        POC Deliverables Status
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pocDeliverablesData.map((item) => (
          <div key={item.name} className="rounded-lg bg-brand-tertiary p-4">
            <div className="flex items-start justify-between mb-3">
              <span className="text-sm font-medium text-brand-white leading-snug pr-2">
                {item.name}
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold whitespace-nowrap ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-brand-surface">
              <div
                className={`h-full rounded-full ${barColors[item.status]}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
