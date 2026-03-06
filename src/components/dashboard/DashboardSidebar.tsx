/**
 * DashboardSidebar — fixed left sidebar with nav sections, settings, and POC status.
 * Desktop (lg+): always visible, collapsible.
 * Mobile/tablet (<lg): hidden by default, slides in as overlay when toggled.
 */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoChevronBackOutline,
  IoGridOutline,
  IoScanOutline,
  IoGlobeOutline,
  IoEyeOffOutline,
  IoBulbOutline,
  IoBugOutline,
  IoShieldCheckmarkOutline,
  IoSettingsOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { sidebarNavItems } from "@/src/data/dashboardData";

const navIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Executive View": IoGridOutline,
  "Asset Discovery": IoScanOutline,
  "Network Map": IoGlobeOutline,
  "Shadow IT": IoEyeOffOutline,
  "AI Anomalies": IoBulbOutline,
  Vulnerabilities: IoBugOutline,
  Compliance: IoShieldCheckmarkOutline,
};

interface DashboardSidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function DashboardSidebar({ mobileOpen, onClose }: DashboardSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const renderSection = (title: string, items: typeof sidebarNavItems.monitor) => (
    <div className="mb-5">
      {!collapsed && (
        <span className="mb-2 block px-4 text-[10px] font-bold tracking-widest text-brand-muted uppercase">
          {title}
        </span>
      )}
      <nav className="space-y-0.5">
        {items.map((item) => {
          const Icon = navIcons[item.label];
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand-secondary/15 text-brand-secondary"
                  : "text-brand-muted hover:bg-brand-surface-light hover:text-brand-white"
              } ${collapsed ? "justify-center px-3" : ""}`}
            >
              {Icon && <Icon className="text-lg shrink-0" />}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  const sidebarContent = (
    <>
      {/* Logo */}
      <div className={`flex items-center gap-2.5 px-4 py-5 ${collapsed ? "justify-center" : ""}`}>
        <Image src="/logo.png" alt="ClarityNet" width={28} height={28} />
        {!collapsed && (
          <div className="flex-1">
            <span className="text-sm font-bold text-brand-white font-(family-name:--font-inter)">
              ClarityNet
            </span>
            <span className="block text-[10px] text-brand-muted">IT Asset Intelligence</span>
          </div>
        )}
        {/* Close button — mobile only */}
        <button onClick={onClose} className="lg:hidden text-brand-muted hover:text-brand-white">
          <IoCloseOutline className="text-xl" />
        </button>
      </div>

      {/* Nav sections */}
      <div className="flex-1 overflow-y-auto px-2 py-2">
        {renderSection("Monitor", sidebarNavItems.monitor)}
        {renderSection("Analyze", sidebarNavItems.analyze)}
        {renderSection("Govern", sidebarNavItems.govern)}
      </div>

      {/* Settings */}
      <div className="border-t border-brand-surface px-2 py-2">
        <Link
          href="/dashboard/settings"
          onClick={onClose}
          className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-brand-muted hover:bg-brand-surface-light hover:text-brand-white transition-colors ${collapsed ? "justify-center px-3" : ""}`}
        >
          <IoSettingsOutline className="text-lg shrink-0" />
          {!collapsed && <span>Settings</span>}
        </Link>
      </div>

      {/* POC Active badge */}
      {!collapsed && (
        <div className="border-t border-brand-surface px-4 py-4">
          <span className="text-[10px] font-bold text-emerald-400 uppercase">POC Active</span>
          <p className="text-xs text-brand-muted mt-0.5">Morocco Bank</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-1.5 flex-1 rounded-full bg-brand-tertiary">
              <div className="h-full w-[66%] rounded-full bg-brand-primary" />
            </div>
            <span className="text-[10px] font-semibold text-brand-muted">66%</span>
          </div>
        </div>
      )}

      {/* Collapse toggle — desktop only */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="hidden lg:flex items-center justify-center border-t border-brand-surface py-3 text-brand-muted hover:text-brand-white transition-colors"
      >
        <IoChevronBackOutline
          className={`text-lg transition-transform ${collapsed ? "rotate-180" : ""}`}
        />
      </button>
    </>
  );

  return (
    <>
      {/* Desktop sidebar — always visible */}
      <AnimatePresence initial={false}>
        <motion.aside
          animate={{ width: collapsed ? 72 : 240 }}
          transition={{ duration: 0.2 }}
          className="hidden lg:flex fixed left-0 top-0 z-40 h-screen flex-col border-r border-brand-surface bg-brand-dark-2 overflow-hidden"
        >
          {sidebarContent}
        </motion.aside>
      </AnimatePresence>

      {/* Mobile/tablet overlay sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="fixed left-0 top-0 z-50 flex h-screen w-70 flex-col border-r border-brand-surface bg-brand-dark-2 overflow-hidden lg:hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
