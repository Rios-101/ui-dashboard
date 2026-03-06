/**
 * LayoutShell — conditionally renders Header + Footer.
 * Hides them on /dashboard routes (which have their own sidebar layout).
 */
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  const isAuthPage = ["/login", "/register", "/forgot-password"].some((p) =>
    pathname.startsWith(p)
  );

  if (isDashboard || isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
