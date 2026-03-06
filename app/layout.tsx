/**
 * Root Layout — wraps the entire application with all providers.
 *
 * Provider nesting order (outermost to innermost):
 *   StoreProvider (Redux + PersistGate)
 *     → QueryProvider (React Query)
 *       → Header
 *       → <main>{children}</main>
 *       → Footer
 *       → ToastProvider
 *
 * Fonts (from Claritynet brand kit):
 *   - Inter: headlines / headings
 *   - DM Sans: body text
 */
import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "./store/provider";
import QueryProvider from "./providers/QueryProvider";
import ToastProvider from "./providers/ToastProvider";
import LayoutShell from "@/src/components/layout/LayoutShell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ClarityNet",
  description: "ClarityNet — built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <StoreProvider>
          <QueryProvider>
            <LayoutShell>{children}</LayoutShell>
            <ToastProvider />
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
