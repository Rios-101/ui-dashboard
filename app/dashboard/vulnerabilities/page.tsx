export default function VulnerabilityManagementPage() {
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
  vulnKpis,
  vulnSeverityData,
  riskCorrelationData,
  priorityCves,
  attackPaths,
} from "@/src/data/vulnerabilityData";

import VulnStatCard from "@/src/components/dashboard/VulnStatCard";
import VulnSeverityChart from "@/src/components/dashboard/VulnSeverityChart";
import RiskCorrelationChart from "@/src/components/dashboard/RiskCorrelationChart";
import PriorityCvesTable from "@/src/components/dashboard/PriorityCvesTable";
import AttackPropagationPaths from "@/src/components/dashboard/AttackPropagationPaths";

export default function VulnerabilityManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-brand-white font-(family-name:--font-inter)">
          Vulnerability Management
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-brand-muted">
          Continuous vulnerability detection correlated with business impact
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {vulnKpis.map((kpi) => (
          <VulnStatCard
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <VulnSeverityChart data={vulnSeverityData} />
        <RiskCorrelationChart data={riskCorrelationData} />
      </div>
      <PriorityCvesTable cves={priorityCves} />
      <AttackPropagationPaths paths={attackPaths} />
    </div>
  );
}
*/
