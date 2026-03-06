export default function ComplianceGovernancePage() {
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
  complianceKpis,
  complianceFrameworks,
  securityPostureRadar,
  governanceWorkflows,
  generatedReports,
} from "@/src/data/complianceData";

import ComplianceStatCard from "@/src/components/dashboard/ComplianceStatCard";
import ComplianceFrameworkCards from "@/src/components/dashboard/ComplianceFrameworkCards";
import SecurityPostureRadar from "@/src/components/dashboard/SecurityPostureRadar";
import GovernanceWorkflows from "@/src/components/dashboard/GovernanceWorkflows";
import GeneratedReports from "@/src/components/dashboard/GeneratedReports";

export default function ComplianceGovernancePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-brand-white font-(family-name:--font-inter)">
            Compliance &amp; Governance
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-brand-muted">
            Regulatory alignment, approval workflows, and audit-ready reporting
          </p>
        </div>
        <button className="brand-gradient shrink-0 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90">
          Export All Reports
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {complianceKpis.map((kpi) => (
          <ComplianceStatCard
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
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-3">
          <ComplianceFrameworkCards frameworks={complianceFrameworks} />
        </div>
        <div className="lg:col-span-2">
          <SecurityPostureRadar data={securityPostureRadar} />
        </div>
      </div>
      <GovernanceWorkflows workflows={governanceWorkflows} />
      <GeneratedReports reports={generatedReports} />
    </div>
  );
}
*/
