/**
 * Mock data for the Network Analytics / Network Map page.
 */

export const networkKpis = [
  {
    label: "TOTAL THROUGHPUT",
    value: "1.44 MB/s",
    sub: "Avg over last hour",
    icon: "throughput" as const,
    iconColor: "text-brand-secondary",
  },
  {
    label: "ACTIVE CONNECTIONS",
    value: "342",
    sub: "+18 in last 5 min",
    subColor: "text-emerald-400",
    icon: "connections" as const,
    iconColor: "text-emerald-400",
  },
  {
    label: "UNIQUE DESTINATIONS",
    value: "47",
    sub: "11 countries",
    icon: "destinations" as const,
    iconColor: "text-emerald-400",
  },
  {
    label: "PROTOCOLS",
    value: "3",
    sub: "TCP 98% · UDP 2%",
    icon: "protocols" as const,
    iconColor: "text-blue-400",
  },
];

export interface TopoNode {
  id: string;
  ip: string;
  size: string;
  x: number;
  y: number;
  highlighted?: boolean;
}

export interface TopoEdge {
  from: string;
  to: string;
}

export const topologyNodes: TopoNode[] = [
  { id: "n1", ip: "10.20.99.102", size: "4.2 MB", x: 480, y: 60 },
  { id: "n2", ip: "10.20.90.18", size: "1.7 MB", x: 380, y: 170 },
  { id: "n3", ip: "10.20.90.29", size: "0.8 MB", x: 240, y: 200 },
  { id: "n4", ip: "10.20.90.8", size: "1.0 MB", x: 680, y: 120 },
  { id: "n5", ip: "4.207.247.138", size: "3.1 MB", x: 560, y: 280, highlighted: true },
  { id: "n6", ip: "10.20.90.34", size: "2.8 MB", x: 250, y: 360 },
  { id: "n7", ip: "10.30.10.24", size: "1.5 MB", x: 660, y: 340 },
  { id: "n8", ip: "10.30.10.22", size: "0.4 MB", x: 580, y: 410 },
  { id: "n9", ip: "10.20.90.41", size: "3.9 MB", x: 420, y: 440 },
  { id: "n10", ip: "10.20.0.1", size: "1.2 MB", x: 520, y: 520 },
];

export const topologyEdges: TopoEdge[] = [
  { from: "n1", to: "n2" },
  { from: "n1", to: "n4" },
  { from: "n1", to: "n5" },
  { from: "n2", to: "n3" },
  { from: "n2", to: "n5" },
  { from: "n2", to: "n6" },
  { from: "n4", to: "n5" },
  { from: "n5", to: "n7" },
  { from: "n5", to: "n8" },
  { from: "n5", to: "n9" },
  { from: "n6", to: "n9" },
  { from: "n7", to: "n8" },
  { from: "n9", to: "n10" },
];

export const throughputData = [
  { time: "14:00", value: 1.5 },
  { time: "14:15", value: 1.4 },
  { time: "14:30", value: 0.9 },
  { time: "14:45", value: 1.6 },
  { time: "15:00", value: 1.7 },
  { time: "15:15", value: 3.1 },
  { time: "15:30", value: 2.8 },
  { time: "15:45", value: 1.8 },
  { time: "16:00", value: 1.5 },
  { time: "16:15", value: 1.4 },
  { time: "16:30", value: 1.6 },
  { time: "16:45", value: 1.5 },
];

export const protocolDistData = [
  { name: "TCP", value: 98, fill: "#f71eaf" },
  { name: "UDP", value: 2, fill: "#ffaa83" },
];

export const topDestinations = [
  { country: "ES", value: 899, unit: "MB", color: "#ffaa83" },
  { country: "US", value: 21, unit: "MB", color: "#f71eaf" },
  { country: "DE", value: 158, unit: "kB", color: "#8888a0" },
  { country: "GB", value: 15.8, unit: "MB", color: "#f71eaf" },
  { country: "NL", value: 1.47, unit: "MB", color: "#f71eaf" },
  { country: "AU", value: 120, unit: "kB", color: "#8888a0" },
];

export const topConversations = [
  { initiator: "10.30.10.24", responder: "10.30.10.21", total: "42.2 GB" },
  { initiator: "10.30.10.22", responder: "10.30.10.24", total: "18.7 GB" },
  { initiator: "10.20.0.10", responder: "10.20.90.40", total: "5.3 GB" },
  { initiator: "10.30.10.24", responder: "10.30.10.22", total: "3.1 GB" },
  { initiator: "10.20.0.1", responder: "10.20.1.51", total: "1.8 GB" },
];
