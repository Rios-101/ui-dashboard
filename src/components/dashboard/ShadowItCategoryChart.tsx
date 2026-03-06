/**
 * ShadowItCategoryChart — horizontal bar chart of shadow IT by category.
 */
"use client";

interface CategoryData {
  category: string;
  count: number;
}

interface ShadowItCategoryChartProps {
  data: CategoryData[];
}

export default function ShadowItCategoryChart({ data }: ShadowItCategoryChartProps) {
  const maxCount = Math.max(...data.map((d) => d.count));

  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-brand-white">Shadow IT by Category</h3>

      <div className="space-y-3">
        {data.map((d) => (
          <div key={d.category} className="flex items-center gap-3">
            <span className="w-32 shrink-0 text-xs text-brand-muted text-right">{d.category}</span>
            <div className="flex-1 h-6 rounded bg-brand-dark overflow-hidden">
              <div
                className="h-full rounded bg-brand-secondary transition-all duration-500"
                style={{ width: `${(d.count / maxCount) * 100}%` }}
              />
            </div>
            <span className="w-6 text-xs text-brand-muted text-right">{d.count}</span>
          </div>
        ))}
      </div>

      {/* X-axis labels */}
      <div className="flex items-center gap-3 mt-2">
        <span className="w-32 shrink-0" />
        <div className="flex-1 flex justify-between text-[10px] text-brand-muted">
          <span>0</span>
          <span>2</span>
          <span>4</span>
          <span>6</span>
          <span>8</span>
        </div>
        <span className="w-6" />
      </div>
    </div>
  );
}
