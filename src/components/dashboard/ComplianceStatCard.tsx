/**
 * ComplianceStatCard — KPI card for the Compliance & Governance page.
 */
"use client";

import {
  IoDocumentTextOutline,
  IoCheckmarkCircleOutline,
  IoAlertCircleOutline,
  IoTimeOutline,
} from "react-icons/io5";

const iconMap = {
  doc: IoDocumentTextOutline,
  check: IoCheckmarkCircleOutline,
  warning: IoAlertCircleOutline,
  clock: IoTimeOutline,
};

interface ComplianceStatCardProps {
  label: string;
  value: string;
  sub: string;
  subColor?: string;
  icon: keyof typeof iconMap;
  iconColor: string;
}

export default function ComplianceStatCard({
  label,
  value,
  sub,
  subColor,
  icon,
  iconColor,
}: ComplianceStatCardProps) {
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
