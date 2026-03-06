/**
 * AssetInventoryTable — data table showing discovered network assets.
 * Desktop/tablet: full data table (horizontally scrollable if needed).
 * Mobile (<md): stacked card layout for each asset.
 */
"use client";

import type { Asset } from "@/src/data/assetData";

function getRiskColor(score: number): string {
  if (score >= 7) return "bg-red-500";
  if (score >= 5) return "bg-orange-500";
  return "bg-emerald-500";
}

interface AssetInventoryTableProps {
  assets: Asset[];
}

function MobileCard({ asset }: { asset: Asset }) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 space-y-3">
      {/* Header row */}
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-brand-white truncate">{asset.name}</span>
        <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 shrink-0">
          {asset.status}
        </span>
      </div>

      {/* Key details */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
        <div>
          <span className="text-brand-muted">IP</span>
          <p className="font-mono text-brand-white mt-0.5">{asset.ips}</p>
        </div>
        <div>
          <span className="text-brand-muted">MAC</span>
          <p className="font-mono text-brand-white mt-0.5 truncate">{asset.mac}</p>
        </div>
        <div>
          <span className="text-brand-muted">Protocols</span>
          <p className="text-brand-white mt-0.5">{asset.protocols}</p>
        </div>
        <div>
          <span className="text-brand-muted">Country</span>
          <p className="text-brand-white mt-0.5">{asset.countries}</p>
        </div>
      </div>

      {/* Metrics row */}
      <div className="flex items-center justify-between border-t border-brand-surface-light pt-3">
        <div className="flex items-center gap-3">
          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white ${getRiskColor(asset.riskScore)}`}>
            {asset.riskScore.toFixed(2)}
          </span>
          <span className="text-xs text-brand-muted">{asset.flows.toLocaleString()} flows</span>
          <span className="text-xs text-brand-muted">{asset.totalBytes}</span>
        </div>
        <span className="text-xs font-semibold text-brand-white">{asset.activeMin.toLocaleString()} min</span>
      </div>
    </div>
  );
}

export default function AssetInventoryTable({ assets }: AssetInventoryTableProps) {
  return (
    <>
      {/* Mobile card layout */}
      <div className="md:hidden space-y-3">
        {assets.map((asset) => (
          <MobileCard key={asset.name} asset={asset} />
        ))}
      </div>

      {/* Desktop/tablet table */}
      <div className="hidden md:block rounded-xl bg-brand-surface overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full min-w-275 text-sm">
            <thead>
              <tr className="border-b border-brand-surface-light text-left">
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Name</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">MAC Address</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Status</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">IP Addresses</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Protocols</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Countries</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase text-center">Ports</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase text-center">Risk Score</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase text-right">Flows</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase text-right">Total Bytes</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">First Seen</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">Last Seen</th>
                <th className="px-4 py-3 text-[11px] font-semibold tracking-wider text-brand-muted uppercase text-right">Active Min</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr
                  key={asset.name}
                  className="border-b border-brand-surface-light/50 hover:bg-brand-surface-light/30 transition-colors"
                >
                  <td className="px-4 py-3.5 font-medium text-brand-white">{asset.name}</td>
                  <td className="px-4 py-3.5 font-mono text-xs text-brand-muted">{asset.mac}</td>
                  <td className="px-4 py-3.5">
                    <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 font-mono text-xs text-brand-muted">{asset.ips}</td>
                  <td className="px-4 py-3.5 text-brand-muted">{asset.protocols}</td>
                  <td className="px-4 py-3.5 text-brand-muted">{asset.countries}</td>
                  <td className="px-4 py-3.5 text-center text-brand-muted">{asset.ports}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold text-white ${getRiskColor(asset.riskScore)}`}>
                      {asset.riskScore.toFixed(2)}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right text-brand-muted">{asset.flows.toLocaleString()}</td>
                  <td className="px-4 py-3.5 text-right text-brand-muted">{asset.totalBytes}</td>
                  <td className="px-4 py-3.5 text-brand-muted">{asset.firstSeen}</td>
                  <td className="px-4 py-3.5 text-brand-muted">{asset.lastSeen}</td>
                  <td className="px-4 py-3.5 text-right font-semibold text-brand-white">{asset.activeMin.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
