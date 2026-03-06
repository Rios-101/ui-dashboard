/**
 * Mock data for the Executive Dashboard.
 * Replace with real API data when endpoints are ready.
 */

export const kpiStats = [
  {
    label: "TOTAL ASSETS",
    value: "1,247",
    sub: "+12 today",
    subColor: "text-brand-muted",
    icon: "assets" as const,
    iconColor: "text-brand-secondary",
  },
  {
    label: "SHADOW IT",
    value: "23",
    sub: "+5 this week",
    subColor: "text-brand-primary",
    icon: "shadow" as const,
    iconColor: "text-brand-primary",
  },
  {
    label: "MONITORED",
    value: "98.2%",
    sub: "1,224 active",
    subColor: "text-brand-muted",
    icon: "monitored" as const,
    iconColor: "text-emerald-400",
  },
  {
    label: "OPEN VULNS",
    value: "24",
    sub: "-10 this week",
    subColor: "text-brand-muted",
    icon: "vulns" as const,
    iconColor: "text-orange-400",
  },
  {
    label: "ML ALERTS",
    value: "13",
    sub: "5 critical",
    subColor: "text-red-400",
    icon: "alerts" as const,
    iconColor: "text-yellow-400",
  },
  {
    label: "COMPLIANCE",
    value: "80%",
    sub: "Avg. across 4",
    subColor: "text-brand-muted",
    icon: "compliance" as const,
    iconColor: "text-emerald-400",
  },
];

export const securityPostureData = [
  { name: "Score", value: 72, fill: "#f71eaf" },
  { name: "Remaining", value: 28, fill: "#32324a" },
];

export const assetClassificationData = [
  { name: "IT Managed", value: 45, fill: "#22c55e" },
  { name: "IoT Devices", value: 25, fill: "#3b82f6" },
  { name: "Shadow IT", value: 18, fill: "#f71eaf" },
  { name: "Unclassified", value: 12, fill: "#6b7280" },
];

export const complianceData = [
  { name: "Bank Al-Maghrib", value: 87, status: "On Track" as const },
  { name: "ISO 27001", value: 74, status: "At Risk" as const },
  { name: "DORA", value: 68, status: "At Risk" as const },
  { name: "NIS2", value: 91, status: "Compliant" as const },
];

export const weeklyTrendData = [
  { day: "Mon", totalAssets: 1180, shadowIT: 18, openVulns: 30 },
  { day: "Tue", totalAssets: 1200, shadowIT: 20, openVulns: 28 },
  { day: "Wed", totalAssets: 1210, shadowIT: 22, openVulns: 32 },
  { day: "Thu", totalAssets: 1230, shadowIT: 21, openVulns: 27 },
  { day: "Fri", totalAssets: 1240, shadowIT: 23, openVulns: 25 },
  { day: "Sat", totalAssets: 1245, shadowIT: 22, openVulns: 24 },
  { day: "Sun", totalAssets: 1247, shadowIT: 23, openVulns: 24 },
];

export const activityFeedData = [
  {
    icon: "traffic" as const,
    text: "Unauthorized Dropbox detected on 10.30.10.22",
    severity: "HIGH" as const,
    time: "2m ago",
  },
  {
    icon: "alert" as const,
    text: "Z-Score spike on subnet 10.30.10.x \u2014 3.2\u03c3",
    severity: "MEDIUM" as const,
    time: "8m ago",
  },
  {
    icon: "alert" as const,
    text: "CVE-2026-1234 affects 3 critical assets",
    severity: "HIGH" as const,
    time: "15m ago",
  },
  {
    icon: "device" as const,
    text: "New device classified: VoIP endpoint 10.20.90.29",
    severity: "LOW" as const,
    time: "22m ago",
  },
  {
    icon: "report" as const,
    text: "ISO 27001 asset inventory report auto-generated",
    severity: "LOW" as const,
    time: "35m ago",
  },
  {
    icon: "traffic" as const,
    text: "NordVPN traffic blocked on port 443",
    severity: "MEDIUM" as const,
    time: "1h ago",
  },
];

export const pocDeliverablesData = [
  { name: "Asset Inventory Report", progress: 100, status: "Complete" as const },
  { name: "Network Mapping Visualization", progress: 100, status: "Complete" as const },
  { name: "Vulnerability Correlation", progress: 60, status: "In Progress" as const },
  { name: "Shadow IT Detection Report", progress: 100, status: "Complete" as const },
  { name: "AI Anomaly Detection Demo", progress: 45, status: "In Progress" as const },
  { name: "Integration Demonstration", progress: 15, status: "Planned" as const },
  { name: "Compliance & Governance Report", progress: 55, status: "In Progress" as const },
  { name: "Final POC Summary", progress: 5, status: "Planned" as const },
];

export const sidebarNavItems = {
  monitor: [
    { label: "Executive View", href: "/dashboard", active: true },
    { label: "Asset Discovery", href: "/dashboard/assets" },
    { label: "Network Map", href: "/dashboard/network" },
  ],
  analyze: [
    { label: "Shadow IT", href: "/dashboard/shadow-it" },
    { label: "AI Anomalies", href: "/dashboard/anomalies" },
    { label: "Vulnerabilities", href: "/dashboard/vulnerabilities" },
  ],
  govern: [
    { label: "Compliance", href: "/dashboard/compliance" },
  ],
};
