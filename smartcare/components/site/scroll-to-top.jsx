"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0); // 0–100
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
      setVisible(scrollTop > 120);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // SVG circle math
  const size = 56;          // total button size in px
  const strokeWidth = 3;
  const radius = (size - strokeWidth * 2) / 2; // inner radius
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
          style={{ width: size, height: size }}
        >
          {/* Progress Ring SVG */}
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="absolute inset-0 -rotate-90"
            aria-hidden="true"
          >
            {/* Track ring */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="oklch(0.98 0 0 / 0.12)"
              strokeWidth={strokeWidth}
            />
            {/* Progress ring */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="url(#scrollGradient)"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: "stroke-dashoffset 0.15s ease" }}
            />
            <defs>
              <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.75 0.17 200)" />
                <stop offset="100%" stopColor="oklch(0.58 0.19 250)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Inner circle button */}
          <span
            className="relative z-10 flex items-center justify-center rounded-full shadow-lg"
            style={{
              width: size - strokeWidth * 2 - 6,
              height: size - strokeWidth * 2 - 6,
              background:
                "linear-gradient(135deg, oklch(0.58 0.19 245), oklch(0.46 0.16 262))",
              boxShadow:
                "0 0 18px oklch(0.55 0.18 250 / 0.55), 0 4px 12px oklch(0.08 0.04 260 / 0.4)",
            }}
          >
            <ArrowUp className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
