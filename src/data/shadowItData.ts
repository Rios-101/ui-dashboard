/**
 * Mock data for the Shadow IT Detection page.
 */

export const shadowItKpis = [
  {
    label: "ACTIVE SHADOW ASSETS",
    value: "23",
    sub: "+5 this week",
    subColor: "text-emerald-400",
    icon: "shield" as const,
    iconColor: "text-emerald-400",
  },
  {
    label: "UNDER INVESTIGATION",
    value: "8",
    sub: "3 pending review",
    icon: "eye" as const,
    iconColor: "text-brand-secondary",
  },
  {
    label: "HIGH RISK ITEMS",
    value: "6",
    sub: "Needs immediate action",
    subColor: "text-red-400",
    icon: "warning" as const,
    iconColor: "text-brand-secondary",
  },
  {
    label: "RESOLVED THIS WEEK",
    value: "14",
    sub: "+60% vs last week",
    subColor: "text-emerald-400",
    icon: "trending" as const,
    iconColor: "text-emerald-400",
  },
];

export const detectionTimelineData = [
  { day: "Mon", detected: 2, resolved: 2 },
  { day: "Tue", detected: 4, resolved: 3 },
  { day: "Wed", detected: 3, resolved: 2 },
  { day: "Thu", detected: 5, resolved: 4 },
  { day: "Fri", detected: 6, resolved: 5 },
  { day: "Sat", detected: 4, resolved: 3 },
  { day: "Sun", detected: 2, resolved: 3 },
];

export const shadowCategoryData = [
  { category: "Cloud Apps", count: 8 },
  { category: "Personal Devices", count: 7 },
  { category: "VPN Services", count: 5 },
  { category: "File Sharing", count: 4 },
  { category: "Messaging", count: 3 },
];

export interface ShadowAsset {
  name: string;
  type: string;
  risk: "High" | "Medium" | "Low";
  sourceIp: string;
  firstSeen: string;
}

export const detectedShadowAssets: ShadowAsset[] = [
  { name: "Dropbox Personal", type: "Cloud Storage", risk: "High", sourceIp: "10.30.10.22", firstSeen: "2026-03-04" },
  { name: "Telegram Desktop", type: "Messaging", risk: "Medium", sourceIp: "10.20.0.10", firstSeen: "2026-03-03" },
  { name: "NordVPN", type: "VPN Service", risk: "High", sourceIp: "10.30.10.24", firstSeen: "2026-03-04" },
  { name: "WeTransfer", type: "File Sharing", risk: "Medium", sourceIp: "10.20.90.40", firstSeen: "2026-03-02" },
  { name: "Personal iPhone", type: "Mobile Device", risk: "Low", sourceIp: "10.30.10.21", firstSeen: "2026-03-05" },
];
