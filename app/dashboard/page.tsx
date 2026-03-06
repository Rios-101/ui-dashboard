/**
 * Executive Dashboard page — assembles all dashboard widgets.
 */
"use client";

import { kpiStats } from "@/src/data/dashboardData";
import StatCard from "@/src/components/dashboard/StatCard";
import SecurityPostureCard from "@/src/components/dashboard/SecurityPostureCard";
import AssetClassificationCard from "@/src/components/dashboard/AssetClassificationCard";
import ComplianceAlignmentCard from "@/src/components/dashboard/ComplianceAlignmentCard";
import WeeklyTrendChart from "@/src/components/dashboard/WeeklyTrendChart";
import LiveActivityFeed from "@/src/components/dashboard/LiveActivityFeed";
import PocDeliverablesStatus from "@/src/components/dashboard/PocDeliverablesStatus";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-brand-white font-(family-name:--font-inter)">
            Executive Dashboard
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-brand-muted">
            ClarityNet POC — Morocco Bank · Real-time posture overview
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-brand-surface px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium text-brand-muted">
            ML Engine v2.1
          </span>
          <span className="rounded-lg bg-emerald-500/15 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-emerald-400">
            ML IDS Active
          </span>
        </div>
      </div>

      {/* KPI Stat Cards */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {kpiStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Middle Row: Security Posture | Asset Classification | Compliance */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <SecurityPostureCard />
        <AssetClassificationCard />
        <ComplianceAlignmentCard />
      </div>

      {/* Weekly Trend + Live Activity Feed */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <WeeklyTrendChart />
        </div>
        <LiveActivityFeed />
      </div>

      {/* POC Deliverables */}
      <PocDeliverablesStatus />
    </div>
  );
}
