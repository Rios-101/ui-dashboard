/**
 * GovernanceWorkflows — list of governance workflow items with actions and status badges.
 */
"use client";

import { IoTimeOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import type { GovernanceWorkflow } from "@/src/data/complianceData";

const statusColorMap: Record<GovernanceWorkflow["statusColor"], string> = {
  amber: "border-amber-400/50 text-amber-400",
  emerald: "border-emerald-400/50 text-emerald-400",
  blue: "border-blue-400/50 text-blue-400",
  pink: "border-brand-secondary/50 text-brand-secondary",
};

const iconByType = {
  pending: IoTimeOutline,
  approved: IoCheckmarkCircleOutline,
  review: IoTimeOutline,
};

interface GovernanceWorkflowsProps {
  workflows: GovernanceWorkflow[];
}

export default function GovernanceWorkflows({ workflows }: GovernanceWorkflowsProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
        Governance Workflows
      </h3>

      <div className="space-y-3">
        {workflows.map((wf, i) => {
          const Icon = iconByType[wf.icon];
          const iconColor =
            wf.icon === "approved" ? "text-emerald-400" : "text-amber-400";
          return (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg bg-brand-dark p-3 md:p-4"
            >
              {/* Icon */}
              <Icon className={`text-lg shrink-0 ${iconColor}`} />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-brand-white leading-snug">{wf.title}</p>
                <p className="mt-0.5 text-[11px] text-brand-muted">
                  By {wf.by} &middot; {wf.date}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <span className="rounded-lg border border-brand-surface-light px-3 py-1 text-[10px] font-medium text-brand-muted">
                  {wf.action}
                </span>
                <span
                  className={`rounded-lg border px-3 py-1 text-[10px] font-semibold ${statusColorMap[wf.statusColor]}`}
                >
                  {wf.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
