/**
 * StatCard — a single KPI metric card for the dashboard top row.
 */
"use client";

import {
  IoShieldCheckmarkOutline,
  IoWarningOutline,
  IoEyeOutline,
  IoBugOutline,
  IoHardwareChipOutline,
  IoCheckmarkDoneOutline,
} from "react-icons/io5";

const iconMap = {
  assets: IoShieldCheckmarkOutline,
  shadow: IoWarningOutline,
  monitored: IoEyeOutline,
  vulns: IoBugOutline,
  alerts: IoHardwareChipOutline,
  compliance: IoCheckmarkDoneOutline,
};

interface StatCardProps {
  label: string;
  value: string;
  sub: string;
  subColor: string;
  icon: keyof typeof iconMap;
  iconColor: string;
}

export default function StatCard({ label, value, sub, subColor, icon, iconColor }: StatCardProps) {
  const Icon = iconMap[icon];

  return (
    <div className="rounded-xl bg-brand-surface p-4 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
          {label}
        </span>
        <Icon className={`text-lg ${iconColor}`} />
      </div>
      <span className="text-2xl font-bold text-brand-white font-(family-name:--font-inter)">
        {value}
      </span>
      <span className={`text-xs ${subColor}`}>{sub}</span>
    </div>
  );
}
