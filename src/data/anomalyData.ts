/**
 * Mock data for the ML Anomaly Detection page.
 */

export const anomalyKpis = [
  {
    label: "ACTIVE ALERTS",
    value: "510",
    sub: "Across all models",
    icon: "alert" as const,
    iconColor: "text-brand-secondary",
  },
  {
    label: "Z-SCORE ALERTS (HOURLY)",
    value: "0",
    sub: "All clear",
    subColor: "text-emerald-400",
    icon: "trending" as const,
    iconColor: "text-brand-secondary",
  },
  {
    label: "ML ANOMALY ALERTS",
    value: "13",
    sub: "Open investigations",
    subColor: "text-brand-secondary",
    icon: "info" as const,
    iconColor: "text-brand-secondary",
  },
  {
    label: "RESOLVED TODAY",
    value: "42",
    sub: "+15% vs yesterday",
    subColor: "text-emerald-400",
    icon: "resolved" as const,
    iconColor: "text-emerald-400",
  },
];

/** EWMA heatmap: 7 days × 24 hours. null = no data / dash. */
export const ewmaHeatmapData: (number | null)[][] = [
  // Mon
  [18.37, 18.36, 18.36, 18.37, 18.36, 18.36, 18.36, 18.37, 18.37, 18.37, 18.36, 18.02, 18.65, 18.67, 18.65, 18.88, 19.45, 19.40, 19.41, 19.42, 19.40, 19.22, 18.48, 18.36],
  // Tue
  [18.53, 18.40, 18.42, 18.57, 18.41, 18.57, 18.45, 19.24, 16.85, 19.41, 19.09, 19.61, 12.02, 18.33, 19.47, 19.15, 18.28, 18.56, 18.84, 18.88, 19.12, 19.17, 19.16, 18.36],
  // Wed
  [19.17, 19.17, 19.24, 19.16, 19.16, 19.18, 19.46, 19.57, 19.55, 19.66, 18.10, 18.78, 19.42, 19.56, 18.96, 16.12, 17.84, 18.03, 14.51, 17.30, 18.92, 17.57, 15.52, 18.36],
  // Thu
  [14.78, 13.56, 14.03, 14.61, 14.59, 14.99, 16.42, 16.81, 13.84, 19.11, 19.38, 19.38, 16.69, 16.98, 19.15, 19.16, 19.12, 18.94, 15.84, 16.38, 19.88, 19.16, 18.45, 18.36],
  // Fri
  [null, null, null, null, 12.83, null, 16.32, 19.20, 19.19, 19.16, 19.11, 18.49, 18.88, 19.15, null, 14.57, 18.73, 19.18, 18.36, 18.37, 18.37, 18.36, 18.36, 18.36],
  // Sat
  [18.36, 18.37, 18.36, 18.36, 18.36, 18.37, 18.36, 18.37, 18.37, 18.37, 18.37, 18.36, 18.37, 18.37, 18.37, 18.37, 18.37, 18.36, 18.37, 18.37, 18.37, 18.36, 18.36, 18.36],
  // Sun
  [18.37, 18.36, 18.36, 18.36, 18.37, 18.36, 18.36, 18.37, 18.37, 18.37, 18.37, 18.36, 18.37, 18.37, 18.37, 18.37, 18.39, 18.36, 18.36, 17.76, 12.05, 18.36, 18.36, 18.36],
];

export const ewmaDayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export interface AnomalyAlert {
  severity: "CRITICAL" | "WARNING" | "INFO";
  title: string;
  model: string;
  time: string;
}

export const recentAnomalyAlerts: AnomalyAlert[] = [
  {
    severity: "CRITICAL",
    title: "Unusual outbound traffic pattern detected on subnet 10.20.x.x",
    model: "Model: EWMA \u00b7 ML Anomaly",
    time: "5 min ago",
  },
  {
    severity: "WARNING",
    title: "Bandwidth spike on interface eth0 \u2014 3.2\u03c3 deviation",
    model: "Model: Z-Score \u00b7 Z-Score",
    time: "12 min ago",
  },
  {
    severity: "CRITICAL",
    title: "New protocol detected: RTP on previously TCP-only host",
    model: "Model: Classification \u00b7 ML Anomaly",
    time: "28 min ago",
  },
  {
    severity: "INFO",
    title: "Slight increase in DNS queries \u2014 within 2\u03c3",
    model: "Model: Z-Score \u00b7 Z-Score",
    time: "45 min ago",
  },
  {
    severity: "WARNING",
    title: "Connection pattern anomaly: 00:50:56:be:d5:d0 scanning ports",
    model: "Model: EWMA \u00b7 ML Anomaly",
    time: "1 hr ago",
  },
];
