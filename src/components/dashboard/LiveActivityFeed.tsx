/**
 * LiveActivityFeed — real-time event list with severity badges.
 */
"use client";

import {
  IoAlertCircleOutline,
  IoHardwareChipOutline,
  IoDocumentTextOutline,
  IoBanOutline,
} from "react-icons/io5";
import { activityFeedData } from "@/src/data/dashboardData";

const iconMap = {
  alert: IoAlertCircleOutline,
  device: IoHardwareChipOutline,
  report: IoDocumentTextOutline,
  traffic: IoBanOutline,
};

const severityColors = {
  HIGH: "bg-red-500/20 text-red-400",
  MEDIUM: "bg-yellow-500/20 text-yellow-400",
  LOW: "bg-emerald-500/20 text-emerald-400",
};

export default function LiveActivityFeed() {
  return (
    <div className="rounded-xl bg-brand-surface p-5 flex flex-col h-full">
      <h3 className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase mb-4">
        Live Activity Feed
      </h3>
      <div className="space-y-4 overflow-y-auto flex-1 pr-2 max-h-72 scrollbar-thin">
        {activityFeedData.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <div key={i} className="flex items-start gap-3 bg-brand-dark rounded-md p-2">
              <div className="mt-0.5 rounded-lg bg-brand-tertiary p-2">
                <Icon className="text-base text-brand-muted" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-brand-white leading-snug">{item.text}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${severityColors[item.severity]}`}
                  >
                    {item.severity}
                  </span>
                  <span className="text-[11px] text-brand-muted">{item.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
