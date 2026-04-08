import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import PageTransition from "@/components/site/page-transition";
import ScrollToTop from "@/components/site/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartCare Services | AC & Refrigerator Repair",
  description:
    "AC repair, installation, gas refill, compressor, water leakage repair & refrigerator service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased flex flex-col`}
      >
        {/* Global Background Grid */}
        <div className="fixed inset-0 -z-50 bg-grid opacity-[0.05] dark:opacity-[0.07]" />

        {/* Navbar floats above everything */}
        <Navbar />

        {/* Page content — no top padding here; each page/hero manages its own */}
        <main className="flex-1 flex flex-col w-full">
          <PageTransition>{children}</PageTransition>
        </main>

        <Footer />

        {/* Global scroll-to-top button — works on all pages */}
        <ScrollToTop />
      </body>
    </html>
  );
}
