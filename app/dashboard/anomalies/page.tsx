export default function MlAnomalyDetectionPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-2xl font-bold text-brand-white">Welcome</h1>
    </div>
  );
}

/*
// Original implementation — commented out before public push

"use client";

import {
  anomalyKpis,
  ewmaHeatmapData,
  ewmaDayLabels,
  recentAnomalyAlerts,
} from "@/src/data/anomalyData";

import AnomalyStatCard from "@/src/components/dashboard/AnomalyStatCard";
import EwmaHeatmap from "@/src/components/dashboard/EwmaHeatmap";
import RecentAnomalyAlerts from "@/src/components/dashboard/RecentAnomalyAlerts";

export default function MlAnomalyDetectionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-brand-white font-(family-name:--font-inter)">
          ML Anomaly Detection
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-brand-muted">
          AI-powered behavioral analysis and anomaly alerts
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {anomalyKpis.map((kpi) => (
          <AnomalyStatCard
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
      <EwmaHeatmap data={ewmaHeatmapData} dayLabels={ewmaDayLabels} />
      <RecentAnomalyAlerts alerts={recentAnomalyAlerts} />
    </div>
  );
}
*/
