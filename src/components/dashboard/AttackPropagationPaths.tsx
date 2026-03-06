/**
 * AttackPropagationPaths — visual representation of lateral movement routes
 * from vulnerable entry points to critical assets.
 */
"use client";

import { IoArrowForwardOutline } from "react-icons/io5";
import type { AttackPath } from "@/src/data/vulnerabilityData";

const severityStyles: Record<AttackPath["severity"], string> = {
  Critical: "bg-red-500/20 text-red-400",
  High: "bg-pink-500/20 text-pink-400",
};

interface AttackPropagationPathsProps {
  paths: AttackPath[];
}

export default function AttackPropagationPaths({ paths }: AttackPropagationPathsProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
        Attack Propagation Paths
      </h3>
      <p className="mt-1 mb-5 text-xs text-brand-muted">
        Potential lateral movement routes from vulnerable entry points to critical assets
      </p>

      <div className="space-y-4">
        {paths.map((path, i) => (
          <div
            key={i}
            className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg bg-brand-dark p-3 md:p-4"
          >
            {/* Severity badge */}
            <span
              className={`shrink-0 self-start rounded-full px-2.5 py-0.5 text-[10px] font-bold ${severityStyles[path.severity]}`}
            >
              {path.severity}
            </span>

            {/* Path chain */}
            <div className="flex flex-wrap items-center gap-2 flex-1 min-w-0">
              {path.nodes.map((node, j) => (
                <span key={j} className="flex items-center gap-2">
                  <span className="rounded bg-brand-surface px-2.5 py-1 font-mono text-xs text-brand-white">
                    {node}
                  </span>
                  {j < path.nodes.length - 1 && (
                    <IoArrowForwardOutline className="text-brand-muted text-sm shrink-0" />
                  )}
                </span>
              ))}
            </div>

            {/* CVE reference */}
            <span className="shrink-0 font-mono text-xs text-brand-muted">{path.cveRef}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
