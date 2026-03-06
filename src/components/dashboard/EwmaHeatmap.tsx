/**
 * EwmaHeatmap — 7×24 grid showing Hourly EWMA Mean values.
 * Cells are color-coded by deviation from baseline (~18.37).
 * Pink/magenta for anomalous (low) values, neutral dark for normal.
 */
"use client";

interface EwmaHeatmapProps {
  data: (number | null)[][];
  dayLabels: string[];
}

const HOURS = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, "0")}h`);
const BASELINE = 18.37;

function getCellColor(value: number | null): string {
  if (value === null) return "bg-brand-dark";
  const deviation = Math.abs(value - BASELINE);
  if (deviation < 0.5) return "bg-brand-surface-light/60";
  if (deviation < 1.5) return "bg-brand-surface-light";
  if (deviation < 2.5) return "bg-pink-900/60";
  if (deviation < 3.5) return "bg-pink-800/70";
  if (deviation < 5) return "bg-brand-secondary/50";
  return "bg-brand-secondary/80";
}

function getCellTextColor(value: number | null): string {
  if (value === null) return "text-brand-muted/40";
  const deviation = Math.abs(value - BASELINE);
  if (deviation < 1.5) return "text-brand-muted";
  if (deviation < 3.5) return "text-pink-200";
  return "text-white";
}

export default function EwmaHeatmap({ data, dayLabels }: EwmaHeatmapProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-brand-white">
        Hourly EWMA Mean — Weekly Heatmap (7×24)
      </h3>

      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full border-separate border-spacing-[2px]" style={{ minWidth: 900 }}>
          <thead>
            <tr>
              <th className="px-2 py-1 text-[10px] font-medium text-brand-muted text-left w-10">
                Day
              </th>
              {HOURS.map((h) => (
                <th
                  key={h}
                  className="px-0 py-1 text-[10px] font-medium text-brand-muted text-center"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIdx) => (
              <tr key={dayLabels[rowIdx]}>
                <td className="px-2 py-0 text-[11px] font-medium text-brand-muted">
                  {dayLabels[rowIdx]}
                </td>
                {row.map((val, colIdx) => (
                  <td
                    key={colIdx}
                    className={`px-0 py-0 text-center rounded ${getCellColor(val)}`}
                  >
                    <span
                      className={`block py-1.5 text-[10px] font-mono leading-none ${getCellTextColor(val)}`}
                    >
                      {val !== null ? val.toFixed(2) : "—"}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
