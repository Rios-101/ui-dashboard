/**
 * ComplianceFrameworkCards — list of compliance frameworks with progress bars,
 * status badges, deadline, and control counts.
 */
"use client";

import { IoChevronForwardOutline } from "react-icons/io5";
import type { ComplianceFramework } from "@/src/data/complianceData";

const statusStyles: Record<ComplianceFramework["status"], string> = {
  "On Track": "bg-emerald-500/20 text-emerald-400",
  "At Risk": "bg-amber-500/20 text-amber-400",
  Compliant: "bg-emerald-500/20 text-emerald-400",
};

function getBarColor(status: ComplianceFramework["status"]): string {
  if (status === "At Risk") return "bg-brand-secondary";
  return "bg-emerald-500";
}

interface ComplianceFrameworkCardsProps {
  frameworks: ComplianceFramework[];
}

export default function ComplianceFrameworkCards({ frameworks }: ComplianceFrameworkCardsProps) {
  return (
    <div className="space-y-4">
      {frameworks.map((fw) => (
        <div
          key={fw.name}
          className="rounded-xl bg-brand-surface p-4 md:p-5 hover:bg-brand-surface-light/30 transition-colors cursor-pointer"
        >
          <div className="flex items-start justify-between gap-4">
            {/* Left: name + description */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h4 className="text-sm font-semibold text-brand-white">{fw.name}</h4>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${statusStyles[fw.status]}`}
                >
                  {fw.status}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-brand-muted">{fw.description}</p>
            </div>

            {/* Right: percentage + deadline */}
            <div className="text-right shrink-0 flex items-center gap-2">
              <div>
                <span className="text-lg font-bold text-brand-white">{fw.percentage}%</span>
                <p className="text-[10px] text-brand-muted">Deadline: {fw.deadline}</p>
              </div>
              <IoChevronForwardOutline className="text-brand-muted text-sm" />
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-2 rounded-full bg-brand-dark overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${getBarColor(fw.status)}`}
              style={{ width: `${fw.percentage}%` }}
            />
          </div>

          {/* Counts */}
          <div className="mt-2 flex items-center justify-end gap-3 text-[11px]">
            <span className="text-emerald-400">&check; {fw.passed}</span>
            <span className="text-brand-secondary">&times; {fw.failed}</span>
            <span className="text-brand-muted">&cir; {fw.pending}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
