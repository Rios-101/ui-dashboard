export default function AssetDiscoveryPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-2xl font-bold text-brand-white">Welcome</h1>
    </div>
  );
}

/*
// Original implementation — commented out before public push

"use client";

import { useState, useMemo } from "react";
import { IoSearchOutline, IoServerOutline } from "react-icons/io5";
import { assetInventory } from "@/src/data/assetData";
import AssetInventoryTable from "@/src/components/dashboard/AssetInventoryTable";

export default function AssetDiscoveryPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return assetInventory;
    const q = search.toLowerCase();
    return assetInventory.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.mac.toLowerCase().includes(q) ||
        a.ips.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-brand-white font-(family-name:--font-inter)">
            Asset Inventory
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-brand-muted">
            Complete inventory of discovered network assets
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-brand-surface px-3 py-2 w-full sm:w-64">
          <IoSearchOutline className="text-brand-muted shrink-0" />
          <input
            type="text"
            placeholder="Search MAC or IP..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-0 bg-transparent text-sm text-brand-white placeholder:text-brand-muted outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm text-brand-muted">
        <IoServerOutline className="text-brand-primary" />
        <span className="font-semibold text-brand-white">{filtered.length} Assets Found</span>
      </div>
      <AssetInventoryTable assets={filtered} />
    </div>
  );
}
*/
