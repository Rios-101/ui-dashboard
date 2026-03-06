/**
 * ShadowAssetsTable — table of detected shadow IT assets.
 * Desktop: full table. Mobile: stacked card layout.
 */
"use client";

import type { ShadowAsset } from "@/src/data/shadowItData";

function getRiskBadge(risk: ShadowAsset["risk"]) {
  const styles = {
    High: "bg-red-500/20 text-red-400",
    Medium: "bg-amber-500/20 text-amber-400",
    Low: "bg-emerald-500/20 text-emerald-400",
  };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${styles[risk]}`}>
      {risk}
    </span>
  );
}

interface ShadowAssetsTableProps {
  assets: ShadowAsset[];
}

function MobileCard({ asset }: { asset: ShadowAsset }) {
  return (
    <div className="rounded-xl bg-brand-dark p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-brand-white">{asset.name}</span>
        {getRiskBadge(asset.risk)}
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
        <div>
          <span className="text-brand-muted">Type</span>
          <p className="text-brand-white mt-0.5">{asset.type}</p>
        </div>
        <div>
          <span className="text-brand-muted">Source IP</span>
          <p className="font-mono text-brand-white mt-0.5">{asset.sourceIp}</p>
        </div>
        <div>
          <span className="text-brand-muted">First Seen</span>
          <p className="text-brand-white mt-0.5">{asset.firstSeen}</p>
        </div>
      </div>
    </div>
  );
}

export default function ShadowAssetsTable({ assets }: ShadowAssetsTableProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-brand-white">Detected Shadow Assets</h3>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {assets.map((asset) => (
          <MobileCard key={asset.name} asset={asset} />
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto scrollbar-thin">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-brand-surface-light text-left">
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Name</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Type</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Risk</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Source IP</th>
              <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">First Seen</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr
                key={asset.name}
                className="border-b border-brand-surface-light/50 hover:bg-brand-surface-light/30 transition-colors"
              >
                <td className="px-4 py-3.5 font-medium text-brand-white">{asset.name}</td>
                <td className="px-4 py-3.5 text-brand-muted">{asset.type}</td>
                <td className="px-4 py-3.5">{getRiskBadge(asset.risk)}</td>
                <td className="px-4 py-3.5 font-mono text-xs text-brand-muted">{asset.sourceIp}</td>
                <td className="px-4 py-3.5 text-brand-muted">{asset.firstSeen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
