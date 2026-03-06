/**
 * AnomalyStatCard — KPI card for the ML Anomaly Detection page.
 */
"use client";

import {
  IoAlertCircleOutline,
  IoTrendingUpOutline,
  IoInformationCircleOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

const iconMap = {
  alert: IoAlertCircleOutline,
  trending: IoTrendingUpOutline,
  info: IoInformationCircleOutline,
  resolved: IoCheckmarkCircleOutline,
};

interface AnomalyStatCardProps {
  label: string;
  value: string;
  sub: string;
  subColor?: string;
  icon: keyof typeof iconMap;
  iconColor: string;
}

export default function AnomalyStatCard({
  label,
  value,
  sub,
  subColor,
  icon,
  iconColor,
}: AnomalyStatCardProps) {
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
