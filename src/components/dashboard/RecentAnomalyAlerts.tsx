/**
 * RecentAnomalyAlerts — scrollable list of recent ML anomaly alerts.
 */
"use client";

import type { AnomalyAlert } from "@/src/data/anomalyData";

const severityStyles: Record<AnomalyAlert["severity"], string> = {
  CRITICAL: "bg-red-500/20 text-red-400",
  WARNING: "bg-amber-500/20 text-amber-400",
  INFO: "bg-blue-500/20 text-blue-400",
};

interface RecentAnomalyAlertsProps {
  alerts: AnomalyAlert[];
}

export default function RecentAnomalyAlerts({ alerts }: RecentAnomalyAlertsProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-brand-white">Recent Anomaly Alerts</h3>

      <div className="space-y-3">
        {alerts.map((alert, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg bg-brand-dark p-3 md:p-4"
          >
            {/* Severity badge */}
            <span
              className={`shrink-0 self-start rounded-4xl px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${severityStyles[alert.severity]}`}
            >
              {alert.severity}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-brand-white leading-snug">{alert.title}</p>
              <p className="mt-0.5 text-[11px] text-brand-muted">{alert.model}</p>
            </div>

            {/* Time */}
            <span className="shrink-0 text-xs text-brand-muted sm:text-right">{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
