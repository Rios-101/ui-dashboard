import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      {/* Glitch-style 404 */}
      <div className="relative">
        <h1 className="text-[120px] sm:text-[160px] font-black leading-none tracking-tighter font-(family-name:--font-inter) brand-gradient-text">
          404
        </h1>
        <div className="absolute inset-0 text-[120px] sm:text-[160px] font-black leading-none tracking-tighter font-(family-name:--font-inter) text-brand-secondary/10 translate-x-1 translate-y-1 select-none">
          404
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-brand-white font-(family-name:--font-inter)">
          Page not found
        </h2>
        <p className="text-sm text-brand-muted max-w-md">
          The resource you are looking for doesn&apos;t exist or has been moved.
          Check the URL or head back to the dashboard.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/dashboard"
          className="brand-gradient rounded-xl px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/login"
          className="rounded-xl border border-brand-surface-light px-6 py-2.5 text-sm font-semibold text-brand-muted hover:text-brand-white hover:border-brand-muted transition-colors"
        >
          Sign in
        </Link>
      </div>

      {/* Decorative scan line */}
      <div className="mt-8 flex items-center gap-2 text-xs text-brand-muted">
        <span className="h-px w-12 bg-brand-surface-light" />
        <span>ClarityNet Security Platform</span>
        <span className="h-px w-12 bg-brand-surface-light" />
      </div>
    </div>
  );
}
