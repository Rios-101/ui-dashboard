/**
 * Mock data for the Compliance & Governance page.
 */

export const complianceKpis = [
  {
    label: "AVG. COMPLIANCE",
    value: "80%",
    sub: "Across 4 frameworks",
    icon: "doc" as const,
    iconColor: "text-brand-primary",
  },
  {
    label: "CONTROLS PASSED",
    value: "175",
    sub: "of 225 total",
    subColor: "text-emerald-400",
    icon: "check" as const,
    iconColor: "text-emerald-400",
  },
  {
    label: "OPEN FINDINGS",
    value: "24",
    sub: "8 high priority",
    subColor: "text-amber-400",
    icon: "warning" as const,
    iconColor: "text-amber-400",
  },
  {
    label: "NEXT AUDIT",
    value: "117d",
    sub: "BAM — Jun 30",
    icon: "clock" as const,
    iconColor: "text-brand-muted",
  },
];

export interface ComplianceFramework {
  name: string;
  status: "On Track" | "At Risk" | "Compliant";
  description: string;
  percentage: number;
  deadline: string;
  passed: number;
  failed: number;
  pending: number;
}

export const complianceFrameworks: ComplianceFramework[] = [
  {
    name: "Bank Al-Maghrib",
    status: "On Track",
    description: "Circular 2024/W — IT Asset Inventory Requirements",
    percentage: 87,
    deadline: "2026-06-30",
    passed: 37,
    failed: 3,
    pending: 2,
  },
  {
    name: "ISO 27001",
    status: "At Risk",
    description: "Information Security Management System",
    percentage: 74,
    deadline: "2026-09-15",
    passed: 69,
    failed: 12,
    pending: 12,
  },
  {
    name: "DORA",
    status: "At Risk",
    description: "Digital Operational Resilience Act",
    percentage: 68,
    deadline: "2027-01-17",
    passed: 38,
    failed: 8,
    pending: 10,
  },
  {
    name: "NIS2",
    status: "Compliant",
    description: "Network and Information Security Directive",
    percentage: 91,
    deadline: "2026-10-18",
    passed: 31,
    failed: 1,
    pending: 2,
  },
];

export const securityPostureRadar = [
  { axis: "Asset Visibility", value: 85 },
  { axis: "Access Control", value: 70 },
  { axis: "Incident Response", value: 60 },
  { axis: "Data Protection", value: 75 },
  { axis: "Risk Management", value: 65 },
  { axis: "Monitoring", value: 80 },
];

export interface GovernanceWorkflow {
  icon: "pending" | "approved" | "review";
  title: string;
  by: string;
  date: string;
  action: string;
  status: string;
  statusColor: "amber" | "emerald" | "blue" | "pink";
}

export const governanceWorkflows: GovernanceWorkflow[] = [
  {
    icon: "pending",
    title: "Shadow IT Review: Dropbox Personal",
    by: "SecOps Team",
    date: "2026-03-05",
    action: "Block",
    status: "Pending Approval",
    statusColor: "amber",
  },
  {
    icon: "approved",
    title: "New Asset Onboarding: IoT Sensor Batch #12",
    by: "IT Infrastructure",
    date: "2026-03-04",
    action: "Approve",
    status: "Approved",
    statusColor: "emerald",
  },
  {
    icon: "pending",
    title: "Exception Request: NordVPN for Remote Team",
    by: "Engineering",
    date: "2026-03-04",
    action: "Exception",
    status: "Under Review",
    statusColor: "blue",
  },
  {
    icon: "pending",
    title: "Risk Acceptance: Dev-Workstation CVE-2026-2201",
    by: "CISO Office",
    date: "2026-03-03",
    action: "Accept Risk",
    status: "Pending Approval",
    statusColor: "amber",
  },
  {
    icon: "approved",
    title: "Compliance Report: Q1 BAM Audit Package",
    by: "Compliance",
    date: "2026-03-02",
    action: "Report",
    status: "Generated",
    statusColor: "emerald",
  },
];

export interface GeneratedReport {
  name: string;
  format: "PDF" | "XLSX" | "ZIP";
  date: string;
  size: string;
}

export const generatedReports: GeneratedReport[] = [
  { name: "Asset Inventory Report", format: "PDF", date: "2026-03-05", size: "2.4 MB" },
  { name: "Shadow IT Detection Summary", format: "PDF", date: "2026-03-05", size: "1.8 MB" },
  { name: "Vulnerability Correlation Report", format: "XLSX", date: "2026-03-04", size: "3.1 MB" },
  { name: "Network Segmentation Map", format: "PDF", date: "2026-03-04", size: "5.2 MB" },
  { name: "BAM Compliance Package", format: "ZIP", date: "2026-03-03", size: "12.7 MB" },
];
