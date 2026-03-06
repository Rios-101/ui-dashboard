/**
 * PriorityCvesTable — remediation queue sorted by CVSS score.
 * Desktop: full table. Mobile: stacked card layout.
 */
"use client";

import { IoOpenOutline } from "react-icons/io5";
import type { PriorityCve } from "@/src/data/vulnerabilityData";

const severityStyles: Record<PriorityCve["severity"], string> = {
  Critical: "bg-red-500/20 text-red-400",
  High: "bg-pink-500/20 text-pink-400",
  Medium: "bg-amber-500/20 text-amber-400",
};

function MobileCard({ cve }: { cve: PriorityCve }) {
  return (
    <div className="rounded-xl bg-brand-dark p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 font-mono text-sm text-brand-primary">
          {cve.id}
          <IoOpenOutline className="text-xs" />
        </span>
        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${severityStyles[cve.severity]}`}>
          {cve.severity}
        </span>
      </div>
      <p className="text-xs text-brand-muted leading-relaxed">{cve.description}</p>
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div>
          <span className="text-brand-muted">CVSS</span>
          <p className="font-bold text-brand-white mt-0.5">{cve.cvss}</p>
        </div>
        <div>
          <span className="text-brand-muted">Assets</span>
          <p className="font-bold text-brand-white mt-0.5">{cve.affectedAssets}</p>
        </div>
        <div>
          <span className="text-brand-muted">Fix</span>
          <p className="font-bold text-brand-white mt-0.5">{cve.remediation}</p>
        </div>
      </div>
    </div>
  );
}

interface PriorityCvesTableProps {
  cves: PriorityCve[];
}

export default function PriorityCvesTable({ cves }: PriorityCvesTableProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
          Priority CVEs — Remediation Queue
        </h3>
        <span className="rounded-lg border border-brand-surface-light px-3 py-1 text-[10px] font-medium text-brand-muted">
          Sorted by CVSS
        </span>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {cves.map((cve) => (
          <MobileCard key={cve.id} cve={cve} />
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto scrollbar-thin">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-brand-surface-light text-left">
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">CVE ID</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Severity</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">CVSS</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Affected Assets</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Description</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Remediation</th>
            </tr>
          </thead>
          <tbody>
            {cves.map((cve) => (
              <tr
                key={cve.id}
                className="border-b border-brand-surface-light/50 hover:bg-brand-surface-light/30 transition-colors"
              >
                <td className="px-4 py-3.5">
                  <span className="flex items-center gap-1.5 font-mono text-xs text-brand-primary">
                    {cve.id}
                    <IoOpenOutline className="text-[10px]" />
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${severityStyles[cve.severity]}`}>
                    {cve.severity}
                  </span>
                </td>
                <td className="px-4 py-3.5 font-bold text-brand-white">{cve.cvss}</td>
                <td className="px-4 py-3.5 text-center text-brand-muted">{cve.affectedAssets}</td>
                <td className="px-4 py-3.5 text-brand-muted max-w-xs">{cve.description}</td>
                <td className="px-4 py-3.5 font-semibold text-brand-white">{cve.remediation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
