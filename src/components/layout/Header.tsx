/**
 * Header — site-wide navigation bar.
 * Dark background per brand guidelines.
 */
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark-2 border-b border-brand-surface">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold font-(family-name:--font-inter) brand-gradient-text">
          <Image src="/logo.png" alt="ClarityNet" width={32} height={32} />
          claritynet
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-brand-muted">
          <Link href="/" className="hover:text-brand-primary transition-colors">
            Home
          </Link>
          <Link href="/login" className="hover:text-brand-primary transition-colors">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
