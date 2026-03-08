/**
 * Shadow IT Detection page — monitors unauthorized assets and services.
 */
"use client";

import {
  shadowItKpis,
  detectionTimelineData,
  shadowCategoryData,
  detectedShadowAssets,
} from "@/src/data/shadowItData";

import ShadowItStatCard from "@/src/components/dashboard/ShadowItStatCard";
import DetectionTimelineChart from "@/src/components/dashboard/DetectionTimelineChart";
import ShadowItCategoryChart from "@/src/components/dashboard/ShadowItCategoryChart";
import ShadowAssetsTable from "@/src/components/dashboard/ShadowAssetsTable";

export default function ShadowItDetectionPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-brand-white font-(family-name:--font-inter)">
          Shadow IT Detection
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-brand-muted">
          Unauthorized assets and services detected on your network
        </p>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {shadowItKpis.map((kpi) => (
          <ShadowItStatCard
            key={kpi.label}
            label={kpi.label}
            value={kpi.value}
            sub={kpi.sub}
            subColor={kpi.subColor}
            icon={kpi.icon}
            iconColor={kpi.iconColor}
          />
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <DetectionTimelineChart data={detectionTimelineData} />
        <ShadowItCategoryChart data={shadowCategoryData} />
      </div>

      {/* Table */}
      <ShadowAssetsTable assets={detectedShadowAssets} />
    </div>
  );
}
