/**
 * DashboardTopBar — top bar with search, system status, notifications, and avatar.
 * Responsive: hamburger menu on mobile, condensed search, hidden labels on small screens.
 */
"use client";

import { IoSearchOutline, IoNotificationsOutline, IoMenuOutline, IoLogOutOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next/client";
import { useAppDispatch } from "@/app/store/store";
import { logout } from "@/app/store/slices/authSlice";

interface DashboardTopBarProps {
  onMenuToggle: () => void;
}

export default function DashboardTopBar({ onMenuToggle }: DashboardTopBarProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  function handleLogout() {
    deleteCookie("accessToken");
    dispatch(logout());
    router.push("/login");
  }

  return (
    <div className="flex h-14 items-center justify-between border-b border-brand-surface bg-brand-dark-2 px-4 md:px-6 gap-3">
      {/* Left: hamburger + search */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={onMenuToggle}
          className="lg:hidden shrink-0 rounded-lg p-2 text-brand-muted hover:bg-brand-surface hover:text-brand-white transition-colors"
        >
          <IoMenuOutline className="text-xl" />
        </button>

        <div className="flex items-center gap-2 rounded-lg bg-brand-surface px-3 py-2 flex-1 max-w-80">
          <IoSearchOutline className="text-brand-muted shrink-0" />
          <input
            type="text"
            placeholder="Search assets, IPs, MACs, CVEs..."
            className="flex-1 min-w-0 bg-transparent text-sm text-brand-white placeholder:text-brand-muted outline-none"
          />
          <kbd className="hidden sm:inline rounded bg-brand-tertiary px-1.5 py-0.5 text-[10px] font-semibold text-brand-muted">
            Ctrl+K
          </kbd>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <span className="hidden md:inline text-xs text-brand-muted">Last scan: 2 min ago</span>

        <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-emerald-400">System Active</span>
        </div>

        <button className="relative rounded-lg p-2 text-brand-muted hover:bg-brand-surface hover:text-brand-white transition-colors">
          <IoNotificationsOutline className="text-lg" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-secondary" />
        </button>

        <button
          onClick={handleLogout}
          className="rounded-lg p-2 text-brand-muted hover:bg-brand-surface hover:text-red-400 transition-colors"
          title="Log out"
        >
          <IoLogOutOutline className="text-lg" />
        </button>

        <div className="h-8 w-8 rounded-full bg-brand-secondary flex items-center justify-center text-xs font-bold text-white">
          N
        </div>
      </div>
    </div>
  );
}
