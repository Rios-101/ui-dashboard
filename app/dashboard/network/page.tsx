export default function NetworkAnalyticsPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-2xl font-bold text-brand-white">Welcome</h1>
    </div>
  );
}

/*
// Original implementation — commented out before public push

"use client";

import {
  networkKpis,
  topologyNodes,
  topologyEdges,
  throughputData,
  protocolDistData,
  topDestinations,
  topConversations,
} from "@/src/data/networkData";

import NetworkStatCard from "@/src/components/dashboard/NetworkStatCard";
import CommunicationTopology from "@/src/components/dashboard/CommunicationTopology";
import ThroughputChart from "@/src/components/dashboard/ThroughputChart";
import ProtocolDistributionChart from "@/src/components/dashboard/ProtocolDistributionChart";
import TopDestinationsChart from "@/src/components/dashboard/TopDestinationsChart";
import TopConversationsTable from "@/src/components/dashboard/TopConversationsTable";

export default function NetworkAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-brand-white font-(family-name:--font-inter)">
          Network Analytics
        </h1>
        <p className="mt-1 text-xs sm:text-sm text-brand-muted">
          Real-time network topology and traffic analysis
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {networkKpis.map((kpi) => (
          <NetworkStatCard
            key={kpi.label}
            label={kpi.label}
            value={kpi.value}
            sub={kpi.sub}
            subColor={kpi.subColor}
            icon={kpi.icon}
            iconColor={kpi.iconColor}
          />
        ))}
      </div>
      <CommunicationTopology nodes={topologyNodes} edges={topologyEdges} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ThroughputChart data={throughputData} />
        <ProtocolDistributionChart data={protocolDistData} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TopDestinationsChart data={topDestinations} />
        <TopConversationsTable data={topConversations} />
      </div>
    </div>
  );
}
*/
