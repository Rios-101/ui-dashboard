/**
 * ShadowItStatCard — KPI card for the Shadow IT Detection page.
 */
"use client";

import {
  IoShieldOutline,
  IoEyeOutline,
  IoWarningOutline,
  IoTrendingUpOutline,
} from "react-icons/io5";

const iconMap = {
  shield: IoShieldOutline,
  eye: IoEyeOutline,
  warning: IoWarningOutline,
  trending: IoTrendingUpOutline,
};

interface ShadowItStatCardProps {
  label: string;
  value: string;
  sub: string;
  subColor?: string;
  icon: keyof typeof iconMap;
  iconColor: string;
}

export default function ShadowItStatCard({
  label,
  value,
  sub,
  subColor,
  icon,
  iconColor,
}: ShadowItStatCardProps) {
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
