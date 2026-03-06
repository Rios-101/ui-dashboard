/**
 * GeneratedReports — list of downloadable report files with format badges.
 */
"use client";

import { IoDocumentOutline, IoDownloadOutline } from "react-icons/io5";
import type { GeneratedReport } from "@/src/data/complianceData";

const formatStyles: Record<GeneratedReport["format"], string> = {
  PDF: "bg-red-500/15 text-red-400",
  XLSX: "bg-emerald-500/15 text-emerald-400",
  ZIP: "bg-blue-500/15 text-blue-400",
};

interface GeneratedReportsProps {
  reports: GeneratedReport[];
}

export default function GeneratedReports({ reports }: GeneratedReportsProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
        Generated Reports
      </h3>

      <div className="space-y-2">
        {reports.map((report) => (
          <div
            key={report.name}
            className="flex items-center gap-3 rounded-lg bg-brand-dark p-3 md:p-4 hover:bg-brand-surface-light/30 transition-colors cursor-pointer"
          >
            <IoDocumentOutline className="text-brand-primary text-lg shrink-0" />

            <div className="flex-1 min-w-0 flex items-center gap-2">
              <span className="text-sm font-medium text-brand-white truncate">{report.name}</span>
              <span
                className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${formatStyles[report.format]}`}
              >
                {report.format}
              </span>
            </div>

            <span className="hidden sm:inline text-xs text-brand-muted shrink-0">{report.date}</span>
            <span className="text-xs text-brand-muted shrink-0">{report.size}</span>

            <button className="rounded-lg p-1.5 text-brand-muted hover:text-brand-white hover:bg-brand-surface transition-colors shrink-0">
              <IoDownloadOutline className="text-base" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
