import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SmartCare Services | AC & Refrigerator Repair",
  description: "AC repair, installation, gas refill, compressor, water leakage repair & refrigerator service.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        {/* Global Background Grid */}
        <div className="fixed inset-0 -z-50 bg-grid opacity-[0.05] dark:opacity-[0.07]" />

        {children}
      </body>
    </html>
  );
}
