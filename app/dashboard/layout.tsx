/**
 * Dashboard layout — Sidebar + TopBar wrapper.
 * On mobile/tablet (<lg): sidebar is hidden, toggled via hamburger in TopBar.
 * On desktop (lg+): sidebar is always visible with collapse support.
 */
"use client";

import { useState } from "react";
import DashboardSidebar from "@/src/components/dashboard/DashboardSidebar";
import DashboardTopBar from "@/src/components/dashboard/DashboardTopBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-brand-dark">
      <DashboardSidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="flex flex-1 flex-col overflow-hidden lg:ml-60">
        <DashboardTopBar onMenuToggle={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
