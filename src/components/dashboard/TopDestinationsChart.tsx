/**
 * TopDestinationsChart — horizontal bar chart of top destination countries.
 */
"use client";

interface Destination {
  country: string;
  value: number;
  unit: string;
  color: string;
}

interface TopDestinationsChartProps {
  data: Destination[];
}

export default function TopDestinationsChart({ data }: TopDestinationsChartProps) {
  const maxValue = Math.max(...data.map((d) => (d.unit === "MB" ? d.value : d.value / 1000)));

  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-brand-white">Top Destination Countries</h3>

      <div className="space-y-3">
        {data.map((d) => {
          const normalised = (d.unit === "MB" ? d.value : d.value / 1000) / maxValue;
          return (
            <div key={d.country} className="flex items-center gap-3">
              <span className="w-7 text-xs font-semibold text-brand-muted">{d.country}</span>
              <div className="flex-1 h-5 rounded-full bg-brand-dark overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${Math.max(normalised * 100, 2)}%`,
                    backgroundColor: d.color,
                  }}
                />
              </div>
              <span className="w-20 text-right text-xs font-medium text-brand-white">
                {d.value} {d.unit}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
