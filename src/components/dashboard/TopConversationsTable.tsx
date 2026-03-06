/**
 * TopConversationsTable — table of top network conversations by total bytes.
 * Mobile: stacked cards. Desktop: standard table.
 */
"use client";

interface Conversation {
  initiator: string;
  responder: string;
  total: string;
}

interface TopConversationsTableProps {
  data: Conversation[];
}

export default function TopConversationsTable({ data }: TopConversationsTableProps) {
  return (
    <div className="rounded-xl bg-brand-surface p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-brand-white">Top Conversations</h3>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {data.map((c, i) => (
          <div key={i} className="rounded-lg bg-brand-dark p-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-brand-white">{c.initiator}</span>
              <span className="text-[10px] text-brand-muted">Initiator</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-brand-white">{c.responder}</span>
              <span className="text-[10px] text-brand-muted">Responder</span>
            </div>
            <div className="border-t border-brand-surface-light pt-2 text-right">
              <span className="text-xs font-semibold text-brand-secondary">{c.total}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto scrollbar-thin">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-brand-surface-light text-left">
              <th className="px-3 py-2 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
                Initiator
              </th>
              <th className="px-3 py-2 text-[11px] font-semibold tracking-wider text-brand-muted uppercase">
                Responder
              </th>
              <th className="px-3 py-2 text-[11px] font-semibold tracking-wider text-brand-muted uppercase text-right">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((c, i) => (
              <tr
                key={i}
                className="border-b border-brand-surface-light/50 hover:bg-brand-surface-light/30 transition-colors"
              >
                <td className="px-3 py-2.5 font-mono text-xs text-brand-white">{c.initiator}</td>
                <td className="px-3 py-2.5 font-mono text-xs text-brand-muted">{c.responder}</td>
                <td className="px-3 py-2.5 text-right text-xs font-semibold text-brand-secondary">
                  {c.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
