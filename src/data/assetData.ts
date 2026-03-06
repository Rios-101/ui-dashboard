/**
 * Mock data for the Asset Inventory / Asset Discovery page.
 */

export interface Asset {
  name: string;
  mac: string;
  status: "Active" | "Inactive";
  ips: string;
  protocols: string;
  countries: string;
  ports: number;
  riskScore: number;
  flows: number;
  totalBytes: string;
  firstSeen: string;
  lastSeen: string;
  activeMin: number;
}

export const assetInventory: Asset[] = [
  {
    name: "DC-Primary-01",
    mac: "00:50:56:be:5e:a3",
    status: "Active",
    ips: "10.20.99.102",
    protocols: "arp, icmp",
    countries: "AU, DE",
    ports: 1,
    riskScore: 8.56,
    flows: 35_099,
    totalBytes: "175 MiB",
    firstSeen: "2026-03-04",
    lastSeen: "2026-03-05",
    activeMin: 1_777,
  },
  {
    name: "App-Server-03",
    mac: "00:50:56:be:55:8b",
    status: "Active",
    ips: "10.20.99.185",
    protocols: "arp, icmp",
    countries: "AU, DE",
    ports: 1,
    riskScore: 6.82,
    flows: 35_207,
    totalBytes: "75.0 MiB",
    firstSeen: "2026-03-04",
    lastSeen: "2026-03-05",
    activeMin: 1_777,
  },
  {
    name: "VoIP-Gateway",
    mac: "00:50:56:be:d5:d0",
    status: "Active",
    ips: "10.20.99.248",
    protocols: "arp, tcp",
    countries: "Local",
    ports: 3,
    riskScore: 6.74,
    flows: 16_146,
    totalBytes: "299 MiB",
    firstSeen: "2026-02-23",
    lastSeen: "2026-03-05",
    activeMin: 14_854,
  },
  {
    name: "IP-Phone-Lobby",
    mac: "00:50:56:be:13:46",
    status: "Active",
    ips: "10.20.90.29, 10.60.x",
    protocols: "arp, rtp",
    countries: "Local",
    ports: 2,
    riskScore: 6.24,
    flows: 6_530,
    totalBytes: "1.13 MiB",
    firstSeen: "2026-02-22",
    lastSeen: "2026-03-05",
    activeMin: 15_832,
  },
  {
    name: "DB-Replica-02",
    mac: "00:50:56:be:0b:6c",
    status: "Active",
    ips: "10.20.99.101",
    protocols: "arp, icmp",
    countries: "Local",
    ports: 1,
    riskScore: 5.13,
    flows: 8_092,
    totalBytes: "1.49 MiB",
    firstSeen: "2026-03-04",
    lastSeen: "2026-03-05",
    activeMin: 1_776,
  },
  {
    name: "Monitoring-Agent",
    mac: "00:50:56:be:a6:4a",
    status: "Active",
    ips: "10.20.99.104",
    protocols: "arp, icmp",
    countries: "Local",
    ports: 1,
    riskScore: 4.17,
    flows: 7_058,
    totalBytes: "1.22 MiB",
    firstSeen: "2026-03-04",
    lastSeen: "2026-03-05",
    activeMin: 1_775,
  },
  {
    name: "Dev-Workstation-07",
    mac: "00:50:56:be:41:15",
    status: "Active",
    ips: "10.20.99.109",
    protocols: "arp, icmp",
    countries: "Local",
    ports: 1,
    riskScore: 4.09,
    flows: 7_209,
    totalBytes: "1.25 MiB",
    firstSeen: "2026-03-04",
    lastSeen: "2026-03-05",
    activeMin: 1_775,
  },
  {
    name: "Backup-NAS-01",
    mac: "00:50:56:be:27:4e",
    status: "Active",
    ips: "10.20.99.107",
    protocols: "arp, icmp",
    countries: "Local",
    ports: 1,
    riskScore: 4.07,
    flows: 7_124,
    totalBytes: "1.24 MiB",
    firstSeen: "2026-03-04",
    lastSeen: "2026-03-05",
    activeMin: 1_775,
  },
];
