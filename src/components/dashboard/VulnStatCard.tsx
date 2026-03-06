/**
 * VulnStatCard — KPI card for the Vulnerability Management page.
 */
"use client";

import {
  IoBugOutline,
  IoAlertCircleOutline,
  IoServerOutline,
  IoTrendingDownOutline,
} from "react-icons/io5";

const iconMap = {
  bug: IoBugOutline,
  alert: IoAlertCircleOutline,
  server: IoServerOutline,
  trending: IoTrendingDownOutline,
};

interface VulnStatCardProps {
  label: string;
  value: string;
  sub: string;
  subColor?: string;
  icon: keyof typeof iconMap;
  iconColor: string;
}

export default function VulnStatCard({
  label,
  value,
  sub,
  subColor,
  icon,
  iconColor,
}: VulnStatCardProps) {
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
      <span className={`text-xs ${subColor || "text-brand-muted"}`}>{sub}</span>
    </div>
  );
}
